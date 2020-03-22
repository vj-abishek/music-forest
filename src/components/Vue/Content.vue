<template>
  <div class="main_section_now">
    <div
      class="content wow fadeInUp"
      v-for="post in Posts"
      v-on:click="handleClick(`${post.id}`)"
      :key="post.id"
    >
      <img :src="post.thumbnail_photo" :alt="post.title" :title="post.title" class="imgbur" />
      <div class="description">
        <div class="img_paly_button">
          <img src="../../assets/images.webp" class="img-br" alt="play button" />
        </div>
        <div class="cont-description">
          <div>{{ post.title }} - {{post.type === "video/mp4" ? "(video)": "(audio)"}}</div>

          <div class="time">{{ new Date(post.time).toLocaleDateString() }}</div>
        </div>
      </div>
    </div>
    <div class="content wow fadeInUp">
      <img src="../.././assets/9.webp" class="imgbur" title="New songs are coming soon!!" />
      <div class="description">
        <div class="img_paly_button">
          <img src="../.././assets/images.webp" class="img-br" alt="play button" />
        </div>
        <div class="cont-description">
          <div>Brand New songs are Coming Soon!!</div>
          <div class="time">{{ new Date().toLocaleDateString() }} | Can't Wait</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//

export default {
  data() {
    return {
      Posts: null,
    };
  },
  methods: {
    handleClick(e) {
      const search = this.Posts.filter((id) => id.id === e);

      localStorage.posts = JSON.stringify(search);

      window.location.href = '/video';
    },
    load() {
      fetch('https://us-central1-music-forest-abigo.cloudfunctions.net/data')
        .then((res) => res.json())
        .then((data) => {
          this.Posts = data;
        });
    },
  },
  mounted() {
    this.load();
  },
};
</script>
<style scoped>
.content {
  height: 300px;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  background: #1f2229;
  box-shadow: 18px 18px 23px #1a1c22, -18px -18px 23px #242830;
  margin-top: 20px;
  border: 0px;
  margin-right: 20px;
}
.imgbur {
  width: 100%;
  height: 80%;
  /* padding: 5px; */
  border-radius: 20px 20px 0px 0px;
}
.description {
  display: flex;
}
.img_paly_button {
  width: 40px;
  padding: 10px;
}
.img-br {
  width: 100%;

  border-radius: 50%;
}
.cont-description {
  padding: 5px;
  line-height: 40px;
  padding-top: 0px;
  font-family: 'Ubuntu', sans-serif;
  color: #c4c7ce;
  flex: 1;
}
.time {
  margin-top: -15px;
  font-size: 13px;
  color: #828288;
}

.main_section_now {
  display: grid;
  padding: 5px;
  /* align-items: center; */
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
.coming_soon {
  width: 100%;
  border-radius: 20px;
}

/* styles for mobile devices */
@media (max-width: 700px) {
  .container-main {
    width: 100%;
    padding: 0px;

    /* background: red; */
  }
  .cont-description {
    font-size: 11px;
  }
  h2 {
    margin-top: 0px;
    padding-top: 40px;
  }
  .main_section_now {
    grid-template-columns: 300px;
  }
  .content {
    padding: 0px;
    margin-right: 20px;
  }
  .nav-bar ul {
    padding: 0px;
  }
  .list-items {
    justify-content: center;
  }
}
</style>
