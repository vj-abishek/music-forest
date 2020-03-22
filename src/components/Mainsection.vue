<template>
  <section class="section_main" id="songs">
    <div class="container-main">
      <h2>My Remake songs ! Listen now 🎶</h2>

      <ContentVue />
    </div>
  </section>
</template>

<script>
import ContentVue from './Vue/Content.vue';

export default {
  components: {
    ContentVue,
  },
};
</script>
<style scoped>
.section_main {
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #1f2229;
  padding-bottom: 20px;
}
h2 {
  color: #fff;
  text-align: center;
  margin-top: 40px;
  font-family: 'Ubuntu', sans-serif;
}
.main_section_now {
  display: grid;
  padding: 5px;
  /* align-items: center; */
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

/* styles for mobile devices */
@media (max-width: 700px) {
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
