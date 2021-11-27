<template>
<base-container>
  <ul>
      <li v-for="post in posts" :key="post">
        <base-card class="card">
          <h3 class="post-title">Post Title</h3>
          <p class="post-body">Lorem ipsum dolor,
                labore totam, esse, debitis vel? Nisi magnam doloremque
                 sit consectetur id necessitatibus est, nemo ex maxime 
                 blanditiis harum, repudiandae soluta reiciendis quaerat 
                 error iusto molestias ....</p>
          <button class="post-btn">Reade More</button>
        </base-card>
      </li>
    </ul>
</base-container>
</template>

<script>
import BaseCard from './UI/BaseCard.vue';
import BaseContainer from './UI/BaseContainer.vue';

export default {
    props: ['posts'],
    components: {BaseCard, BaseContainer}
}
</script>

<style scoped>
ul {
    padding: 0;
}

li {
    list-style: none;
}

.card {
    background: #162c52;
    color: #f1f5f8;
    text-align: left;
    padding: 2rem
}

.post-title {
    color: #cbb017;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0;
}

.post-body {
    color: #b3c0d4;
    line-height: 1.5;
    font-size: 1.05rem;
}

.post-btn {
    background-image: linear-gradient(to bottom right, #d7e7ff 42%, #6699e4 76%);
    padding: .5rem 1.25rem;
    letter-spacing: 1px;
    border: none;
    border-radius: 12px;
    color: #092f68;
    font-weight: bold;
    cursor: pointer;
}

.post-btn:focus {
    outline: var(--prim-clr);
}
</style>