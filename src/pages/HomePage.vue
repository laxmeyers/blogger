<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-for="b in blogs">
        <div class="row">
          <div class="col-9">
            <div class="d-flex align-items-center">
              <img :src="b.creator.picture" alt="" class="rounded-circle img-fluid profile-picture">
              <h6>{{ b.creator.name}}</h6>
            </div>
            <h4>{{ b.title }}</h4>
            <p class="text-limit">{{ b.body }}</p>
            <small>{{ b.date }}</small>
          </div>
          <div class="col-3">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState';
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Pop';

export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error, '[getting blogs]')
      }
    }
    onMounted(() => {
      getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.profile-picture{
  height: 5em;
  width: 5em;
}

.text-limit{
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: 8vh;
}
</style>
