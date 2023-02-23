<template>
    <div v-if="blog" class="container-fluid">
        <div class="row">
            <div class="col-12">
                <img class="img-fluid" :src="blog.imgUrl" alt="">
                <h1>{{blog.title}}</h1>
                <p>{{blog.body}}</p>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';

export default {
    setup(){
        return {
            blog: computed(() => AppState.activeBlog)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>