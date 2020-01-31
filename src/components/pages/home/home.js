import React from 'react'
import PostList from '../../post-list'
import CommentList from '../../comment-list'

const Home = () => (
  <>
      <h1>All Posts</h1>
      <PostList />
      <div className="row pb-5">
          <div className="col-lg-10"><CommentList /></div>
      </div>
  </>
)

export default  Home
