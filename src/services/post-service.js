export default class PostService {

    _apiBase = 'https://bloggy-api.herokuapp.com'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json()
    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts')
        return res
    }

    getPost = async (id) => {
        const res = await this.getResource(`/posts/${id}`)
        return res
    }

    getPostAndComments = async (id) => {
        const res = await this.getResource(`/posts/${id}?_embed=comments`)
        return res
    }

    getComments = async () => {
        const res = await this.getResource('/comments')
        return res
    }

    createPost = async (post) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),
            redirect: 'follow'
        }

        await fetch(`${this._apiBase}/posts`, requestOptions)
            .then(response => response.text())
            .catch(err => console.log('error', err))
    }

    createComment = async (comment) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment),
            redirect: 'follow'
        }

        await fetch(`${this._apiBase}/comments`, requestOptions)
            .then(response => response.text())
            .catch(err => console.log('error', err))

    }

    updatePost = async (id, changedPost) => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changedPost),
            redirect: 'follow'
        };

        await fetch(`${this._apiBase}/posts/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(err => console.log('error', err))
    }

    deletePost = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        }

        await fetch(`${this._apiBase}/posts/${id}`, requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
    }
}
