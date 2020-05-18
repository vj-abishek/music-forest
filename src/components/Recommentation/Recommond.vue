<template>
  <div class="mainRecommended">
    <h2 class="div">You might like</h2>
    <Thumbnail :posts="Posts" />
  </div>
</template>
<script>
import Thumbnail from '../Video/Thumbnail.vue';

export default {
  components: {
    Thumbnail,
  },
  data() {
    return {
      Posts: [],
    };
  },
  mounted() {
    fetch('https://us-central1-music-forest-abigo.cloudfunctions.net/data')
      .then((res) => res.json())
      .then((data) => {
        const postslocal = JSON.parse(localStorage.posts);

        const another = data.filter((da) => postslocal[0].id !== da.id);
        this.Posts = another;
      });
  },
};
</script>
<style >
.mainRecommended {
  margin-top: 50px;
  /* background: red; */
}

.mainRecommended .div {
  font-family: 'Ubuntu', sans-serif;
  color: #606060;
  font-size: 15px;
  margin-left: 15px;
}
@media (max-width: 768px) {
  .mainRecommended {
    margin-top: 0px;
  }
}
</style>
