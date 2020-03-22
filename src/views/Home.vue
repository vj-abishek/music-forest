<template>
  <main>
    <header class="header">
      <div class="container">
        <h2 class="heading wow zoomInDown">Expand the music like forest!</h2>
        <p
          class="wow fadeIn"
          data-wow-delay="1s"
        >Welcome to my stage!!. Sing and make music from your heart to the lord ❤</p>
        <!-- lint-igonre -->
        <a href="#songs">
          <button class="btn wow fadeIn" data-wow-delay="1s">Listen now 🎧</button>
        </a>
      </div>
      <div class="side-crop wow fadeIn" data-wow-delay="1s">
        <img
          src=".././Elisha/2-min.webp"
          alt="music-forest website | Remake songs by elisha kumar"
          style="height:auto;width:500px"
        />
      </div>
    </header>
    <Main />
    <About />
    <Footer />
  </main>
</template>

<script>
import Main from '../components/Mainsection.vue';
import Footer from '../components/Footer.vue';
import About from '../components/About.vue';

export default {
  name: 'Home',
  components: {
    Main,
    Footer,
    About,
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url('https://www.jimdo.com/u1MR-3Dpkk2pvbeK0lOX6vDEn.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.side-crop {
  max-height: 625px;
  overflow: hidden;
}
.side-crop img {
  max-width: initial;
  margin-top: 40px; /* Maybe optional. See note below */

  text-indent: -50%;
}
.heading {
  font-size: 50px;
  font-family: 'Ubuntu', sans-serif;
}
.container {
  flex: 1;
  margin-top: -50px;
  font-weight: 700;
  margin-left: 70px;
  padding: 20px;
}
p {
  /* font-size: 10px; */
  font-family: 'Ubuntu', sans-serif;
}
.btn {
  padding: 10px;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgb(226, 197, 139);
  outline: none;
  border: 1px solid #ebebeb;
  border-radius: 22px;
  box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
@media (max-width: 700px) {
  .container {
    margin: 0px;
  }
  .header {
    height: 100vh;
    background-attachment: scroll;
  }
  .side-crop {
    height: 440px;
  }
  .side-crop img {
    width: 350px !important;
    position: relative;
    z-index: 1;
    margin-top: 0px;
  }
  .heading {
    font-size: 35px;
    padding-top: 40px;
  }
  .section_main {
    position: relative;
    z-index: 2;
  }
}
</style>
