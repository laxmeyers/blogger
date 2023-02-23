import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogsService{
    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log(res.data)
        AppState.blogs = res.data.map(b => new Blog(b))
    }

    async getBloggerById(profileId) {
        AppState.blogs = []
        const res = await api.get(`api/blogs`, {params: {creatorId: profileId}})
        logger.log('blogeer', res.data)
        AppState.blogs = res.data.map(b => new Blog(b))
    }

    async getProfileById(profileId) {
        AppState.blogger = null
        const res = await api.get('api/profiles/' + profileId)
        AppState.blogger = res.data
    }

    async createBlog(formData) {
        const res = await api.post('api/blogs', formData)
        logger.log(res.data)
        AppState.blogs.push(new Blog(res.data))
    }

    setActiveBlog(blog) {
        AppState.activeBlog = blog
    }
}

export const blogsService = new BlogsService()