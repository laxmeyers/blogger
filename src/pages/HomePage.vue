<template>
  <div class="container">
    <div class="row">
      <div class="col-12 my-3 border border-dark rounded p-3" v-for="b in blogs">
        <BlogsCard :blog="b"/>
      </div>
    </div>

    <Modal id="">

    </Modal>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState';
import BlogsCard from '../components/BlogsCard.vue';
import Modal from '../components/Modal.vue';
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Pop';

export default {
    setup() {
        async function getBlogs() {
            try {
                await blogsService.getBlogs();
            }
            catch (error) {
                Pop.error(error, "[getting blogs]");
            }
        }
        onMounted(() => {
            getBlogs();
        });
        return {
            blogs: computed(() => AppState.blogs)
        };
    },
    components: { BlogsCard, Modal }
}
</script>

<style scoped lang="scss">

</style>
