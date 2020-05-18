<template>
  <div>
    <div
      @click="handleClick"
      :data-id="post.id"
      v-bind:key="post.id"
      v-for="post in posts"
      class="upnext-container"
    >
      <div class="img" :data-id="post.id">
        <img class="imgclass" :src="post.thumbnail_photo" :alt="post.id" :data-id="post.id" />
      </div>
      <div class="fefe" :data-id="post.id">
        {{post.title}}
        <br />
        <small class="time" :data-id="post.id">Uploaded - {{ reduceMe(post.time) }}</small>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  props: ['posts'],
  data() {
    console.log('Hi there', this.posts);
    return {
      postsof: this.posts,
    };
  },
  methods: {
    reduceMe: (data) => moment(data).from(),
    handleClick(e) {
      const click = e.target.dataset.id;
      const search = this.postsof.filter((id) => id.id === click);

      localStorage.posts = JSON.stringify(search);
      window.location.href = '/video';
    },
  },
  watch: {
    posts(newVal) {
      console.log(newVal);
      this.postsof = newVal;
    },
  },
};
</script>
<style>
.upnext-container {
  display: flex;
  flex-direction: row;
  margin-left: 15px;
}
.upnext-container .img {
  flex: 1;
  max-width: 168px;
  max-height: 94px;
  margin-bottom: 5px;
}
.fefe {
  font-family: 'Ubuntu', sans-serif;
  font-size: 17px;
  flex: 2;
  padding: 5px;
  /* max-width: 200px; */
}
.imgclass {
  width: 160px;
  height: 90px;
}
.time {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-family: 'Ubuntu', sans-serif;
  color: #606060;
}
/*@media */
@media (max-width: 425px) {
  .fefe {
    font-size: 14px;
  }
}
</style>
