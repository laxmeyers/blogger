<template>
    <form @submit.prevent="createBlog()">
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" v-model="editable.title" class="form-control" id="title" required>
  </div>
  <div class="mb-3">
    <label for="body" class="form-label">Body</label>
    <input type="text" v-model="editable.body" class="form-control" id="body" required>
  </div>
  <div class="mb-3">
    <label for="img" class="form-label">Image Url</label>
    <input type="url" v-model="editable.imgUrl" class="form-control" id="img" required>
  </div>
  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
</form>
</template>


<script>
import { ref } from 'vue';
import { AppState } from '../AppState';
import { blogsService } from '../services/BlogsService';
import Pop from '../utils/Pop';

export default {
    setup() {
        const editable = ref({})

        
        return {
            editable,
            async createBlog() {
                try {
                    editable.value.creatorId = AppState.blogger.id
                    const formData = editable.value
                    await blogsService.createBlog(formData)
                    editable.value = {}
                } catch (error) {
                    Pop.error(error, '[creating blogs]')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>