import React, { Component } from 'react'
import PostService from '../../../services/post-service'

export default class PostAndComments extends Component {

    postService = new PostService()

    state = {
        post_and_comments: {}
    }

    componentDidMount() {
        const { postId } = this.props
        this.postService.getPostAndComments(postId)
            .then(data => {
                this.setState({ post_and_comments: data })
            })

    }

    renderListComments = () => {
        const comments = this.state.post_and_comments.comments

        if (!Array.isArray(comments)) {
            return []
        }

        return comments.map(({ id, body }) => {
            return (
                <li className="list-group-item" key={id}>
                    <strong>Comment #{id}</strong>: {body}
                </li>
            )
        })
    }

    render() {
        const { post_and_comments: { id, title, body } } = this.state

        return (
            <div>
                <div className="card border-light mb-3">
                    <div className="card-header">Post #{id}</div>
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{body}</p>
                    </div>
                </div>
                <div className="row">
                    <h5 className='col-lg-12 text-center'>Comments for Post #{id}</h5>
                    <div className="col-lg-10 offset-1 list-group">
                        {this.renderListComments()}
                    </div>
                </div>
            </div>
        )
    }
}
