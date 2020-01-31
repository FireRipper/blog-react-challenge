import React from 'react'
import PostService from '../../services/post-service'

class CreateComment extends React.Component {

    postService = new PostService()

    state = {
        postId: this.props.postId,
        body: ''
    }

    onWriteComment = (bodyId, e) => {
        this.setState({
            postId: bodyId,
            body: e.target.value
        })
    }

    onSendComment = (e) => {
        e.preventDefault()

        this.postService.createComment(this.state)
            .then(data => data)
        this.setState({
            body: ''
        })
    }

    render() {
        const { postId } = this.props
        const { body } = this.state

        return (
            <form autoComplete='off' key={postId} onSubmit={this.onSendComment}>
                <div className="form-group">
                    <label htmlFor={`create--comment-${postId}`}>Write comment</label>
                    <textarea className="form-control" id={`create--comment-${postId}`} value={body}
                              onChange={(e) => this.onWriteComment(postId, e)} rows="2"
                              required
                    />
                </div>
                <button className='btn btn-primary mb-2'>Send</button>
            </form>
        )
    }
}

export default CreateComment
