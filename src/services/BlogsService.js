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
}

export const blogsService = new BlogsService()