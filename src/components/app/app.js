import React from 'react'
import Header from '../header'
import Container from '../container'
import Home from '../pages/home'
import CreatePost from '../pages/create-post'
import ErrorBoundary from '../error-boundary'
import EditPost from '../pages/edit-post'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './app.css'
import PostAndComments from '../pages/post-and-comments'

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <div className="app">
                    <Header />
                    <Switch>
                        <Route path={'/'} exact render={() => {
                            return (<Container content={<Home />} />)
                        }} />
                        <Route path={'/create'} render={() => {
                            return (<Container content={<CreatePost />} />)
                        }} />
                        <Route exact path={`/posts/:id`}
                               render={({ match }) => {
                                   const { id } = match.params

                                   return (
                                       <Container content={<EditPost itemId={id} />} />
                                   )
                               }} />
                        <Route path={`/posts/post-with-comments/:id`}
                               render={({ match }) => {
                                   const { id } = match.params

                                   return (
                                       <Container content={<PostAndComments postId={id} />} />
                                   )
                               }} />
                        <Route render={() => <h2>Page not found</h2>} />
                    </Switch>

                </div>
            </Router>
        </ErrorBoundary>
    )
}

export default App
