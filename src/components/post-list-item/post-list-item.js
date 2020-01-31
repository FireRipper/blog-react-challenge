import React from 'react'
import { Link } from 'react-router-dom'
import CreateComment from '../create-comment'

import './post-list-item.css'

const PostListItem = ({ posts, onDeletePost }) => {

    const renderAllPosts = posts.map(({id, title = 'Title not found', body = 'Text not found'}) => {
        return (
            <div className="card border-primary mb-3" key={id}>
                <div className="card-header">Post #{id}</div>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{body}</p>
                    <div className="post--list--item__del">
                        <Link to={`/posts/${id}`}><button type="button"
                                className="btn btn-outline-info mr-3 ">Edit</button></Link>
                        <button type="button"
                                className="btn btn-outline-danger"
                                onClick={() => onDeletePost(id) }>Delete</button>
                    </div>
                </div>
                <div className='row px-3'>
                    <div className="col-lg-6">
                        <CreateComment postId={id}/>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <Link to={`/posts/post-with-comments/${id}`}>
                            <button type="button" className="btn btn-info btn-lg">Post and comments</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <React.Fragment>
            {renderAllPosts}
        </React.Fragment>
    )
}

export default PostListItem
