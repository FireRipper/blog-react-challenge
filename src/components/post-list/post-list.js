import React, { Component } from 'react'
import PostListItem from '../post-list-item'
import PostService from '../../services/post-service'

class PostList extends Component {

    postService = new PostService()

    state = {
        posts: [],
        hasError: false
    }

    componentDidMount() {
        this.postService
            .getAllPosts()
            .then((data) => {
                this.setState({
                    posts: data
                })
            })
            .catch(() => {
                this.setState({ hasError: true })
            })
    }

    onDeletePost = (postId) => {
        this.postService.deletePost(postId).then(data => data)

        this.setState(({ posts }) => {
            const itemIndex = posts.findIndex(({ id }) => id === postId)

            const newPosts = [
                ...posts.slice(0, itemIndex),
                ...posts.slice(itemIndex + 1)
            ]

            return {
                posts: newPosts,
                hasError: false
            }
        })
    }

    render() {

        const { posts, hasError } = this.state

        if (hasError) {
            return (
                <div className="alert alert-dismissible alert-danger">
                    <strong>Something has gone terribly wrong. Please reload page!</strong>
                </div>
            )
        }

        return (
            <PostListItem posts={posts} onDeletePost={this.onDeletePost} />
        )
    }
}

export default PostList
