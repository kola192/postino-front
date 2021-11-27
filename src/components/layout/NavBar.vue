<template>
    <nav id="nav">
        <base-container>
            <div class="list">
                <h1 class="logo">Postino</h1>
                <div>
                    <router-link to="/all-posts">All Posts</router-link>
                    <span class="divider">|</span>
                    <router-link to="/add-post">Add New Post</router-link>
                </div>
            </div>
        </base-container>
    </nav>
    
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue'
export default {
    components: {BaseContainer}
}
</script>

<style scoped>
.logo {
    margin: 0;
    padding: 15px 0;
    font-weight: bold;
    font-size: 1.8rem;
    text-transform: capitalize;
    color: var(--prim-clr);
}

#nav {
  background-image: linear-gradient(to bottom , #d7e7ff 42%, #c8ddfb 76%);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: var(--prim-clr);
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.divider {
  margin: 0 1rem;
}

@media screen and (max-width: 678px) {
  .logo {
    font-size: 1.5rem;
}
  .divider {
    margin: 0 .25rem;
  }
}
</style>