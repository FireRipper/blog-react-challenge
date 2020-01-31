import React from 'react'
import PostService from '../../../services/post-service'


class CreatePost extends React.Component {

    postService = new PostService()

    state = {
        title: '',
        body: ''
    }

    onTitleChange = e  => {
        this.setState({
            title: e.target.value
        })
    }

    onTextAreaChange = e => {
        this.setState({
            body: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.postService.createPost(this.state)
            .then(data => data)
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        const { title, body } = this.state

        return (
            <>
                <h2>Create Post</h2>
                <form autoComplete={'off'}
                      onSubmit={this.onSubmit}
                      method='POST'
                >
                    <div className="form-group">
                        <label htmlFor="post-title">Title post</label>
                        <input type="text"
                               className="form-control"
                               id="post-title"
                               placeholder="Title"
                               value={title}
                               onChange={this.onTitleChange}
                               required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-text">Text post</label>
                        <textarea className="form-control" id="post-text" rows="3"
                                  placeholder="What is your post about..."
                                  onChange={this.onTextAreaChange}
                                  value={body}
                                  required />
                    </div>
                    <button type="submit" className="btn btn-primary">Create post</button>
                </form>
            </>
        )
    }
}

export default CreatePost
