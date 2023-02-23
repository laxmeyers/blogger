<template>
    <div v-if="blogger" class="container">
        <div class="row">
            <div class="col-12">
                <div class="d-flex">
                    <img class="profile-picture rounded-circle" :src="blogger.picture" alt="">
                    <h2>{{ blogger.name }}</h2>
                </div>
                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="mdi mdi-plus btn btn-warning"></button>
            </div>
            <div v-for="blog in blogs" class="col-10 m-auto">
                <BlogsCard :blog="blog" />
            </div>
        </div>

        <Modal id="staticBackdrop">
            <BlogForm></BlogForm>
        </Modal>
        <Modal id="activeBlog">
            <BlogPost/>
        </Modal>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import BlogForm from '../components/BlogForm.vue';
import BlogPost from '../components/BlogPost.vue';
import BlogsCard from '../components/BlogsCard.vue';
import Modal from '../components/Modal.vue';
import { blogsService } from '../services/BlogsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {
        const route = useRoute();
        const profileId = route.params.ProfileId;
        async function getBloggerById() {
            try {
                await blogsService.getBloggerById(profileId);
                await blogsService.getProfileById(profileId);
                logger.log(AppState.blogs);
            }
            catch (error) {
                Pop.error(error, "[get blogger by id]");
            }
        }
        onMounted(() => {
            getBloggerById();
        });
        return {
            blogger: computed(() => AppState.blogger),
            blogs: computed(() => AppState.blogs)
        };
    },
    components: { BlogsCard, Modal, BlogForm, BlogPost }
}
</script>


<style lang="scss" scoped>
.profile-picture {
    height: 10em;
    width: 10em;
    object-fit: cover;
}
</style>