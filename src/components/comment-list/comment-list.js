import React from 'react'
import PostService from '../../services/post-service'

class CommentList extends React.Component {

    postService = new PostService()

    state = {
        comments: []
    }

    componentDidMount() {
        this.postService
            .getComments()
            .then((comment) => {
                this.setState({
                    comments: comment
                })
            })
    }

    renderListComments = () => {
        return this.state.comments.map(({ postId, id, body }) => {
            return (
                <div key={id}>
                    <h5 className='my-3' >Comment for post #{postId} </h5>
                    <li className="list-group-item" >
                        {body}
                    </li>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="list-group">
                {this.renderListComments()}
            </div>
        )
    }
}

export default CommentList
