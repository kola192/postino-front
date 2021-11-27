<template>
<base-container>
  <base-card class="card">
      <form>
          <div class="form-control">
              <label for="title">Post Title</label>
              <input type="text" name="title" id="title">
          </div>
          <div class="form-control">
              <label for="body">Post Body</label>
              <textarea type="text" name="body" id="body" rows="5"></textarea>
          </div>
          <div class="form-control">
              <label for="author">Post Author</label>
              <select name="author" id="author">
                  <option value="abdalla">Abdallah</option>
                  <option value="aladin">Aladin</option>
                  <option value="mohab">Mohab</option>
                  <option value="zahir">Zahir</option>
              </select>
          </div>
          <input type="submit" class="post-btn">
      </form>
    </base-card>
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
.card {
    background: #162c52;
    color: #f1f5f8;
    text-align: left;
    padding: 2rem
}

.form-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
}

label {
    color: #cbb017;
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: .25rem
}

form input,
textarea,
select {
    color: #b3c0d4;
    line-height: 1.5;
    font-size: 1.05rem;
    padding: .25rem 1rem;
    border-radius: 12px;
    background: #253d68;
    border: 0;
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

.post-btn:focus,
input,
textarea,
select {
    outline: var(--prim-clr);
}
</style>