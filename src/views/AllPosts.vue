<template>
  <div>
    <h1 class="main-heading">All Posts</h1>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

export default {
  components: { PostList },
  data(){
    return{
      posts: [1,2,3,4,5,6,7,8,9]
    }
  }

}
</script>
