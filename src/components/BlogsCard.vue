<template>
    <div class="row align-items-center">
        <div class="col-9">
            <div class="d-flex align-items-center">
                <router-link :to="{name: 'Profile', params: {ProfileId: blog.creatorId}}">
                    <img :src="blog.creator.picture" alt="" class="rounded-circle img-fluid profile-picture">
                </router-link>
                <h6>{{ blog.creator.name }}</h6>
            </div>
            <h4>{{ blog.title }}</h4>
            <p class="text-limit">{{ blog.body }}</p>
            <small>{{ blog.date }}</small>
        </div>
        <div class="col-3">
            <img @click="setActiveBlog(blog)" data-bs-toggle="modal" data-bs-target="#activeBlog" :src="blog.imgUrl" :alt="blog.title" class="img-fluid rounded">
        </div>
    </div>
</template>


<script>
import { Blog } from '../models/Blog';
import { blogsService } from '../services/BlogsService';
import Pop from '../utils/Pop';

export default {
    props: {
        blog: {type: Blog, required: true}
    },

    setup() {
        return {
            setActiveBlog(blog) {
                try {
                    blogsService.setActiveBlog(blog)
                } catch (error) {
                    Pop.error(error, '[setting active blog]')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-picture{
  height: 5em;
  width: 5em;
}

.text-limit{
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: 8vh;
}</style>