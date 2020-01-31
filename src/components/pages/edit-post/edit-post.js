import React from 'react'
import PostService from '../../../services/post-service'

class EditPost extends React.Component {
    postService = new PostService()

    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        const { itemId } = this.props

        this.postService
            .getPost(itemId)
            .then(data => this.setState({ post: data }))
            .catch(err => console.log(err))
    }


    onSendChangedPost = e => {
        const { itemId } = this.props

        e.preventDefault()

        this.postService
            .updatePost(itemId, this.state.post)
            .then(data => data)
    }

    render() {
        const { id, title = 'Nothing', body = 'Nothing' } = this.state.post

        return (
            <>
                <h2>Edit Post #{id} </h2>
                <form autoComplete={'off'} onSubmit={this.onSendChangedPost}>
                    <div className="form-group">
                        <label htmlFor="post-title">Title post</label>
                        <input type="text"
                               className="form-control"
                               id="post-title"
                               placeholder="Title"
                               onChange={(e) => this.setState({ post: { id, body, title: e.target.value }})}
                               value={title}
                               required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-text">Text post</label>
                        <textarea className="form-control" id="post-text" rows="5"
                                  placeholder="What is your post about..."
                                  value={body}
                                  onChange={(e) => this.setState({ post: { id, title, body: e.target.value}})}
                                  required />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit post</button>
                </form>
            </>
        )
    }
}

export default EditPost
