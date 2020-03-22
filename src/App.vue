<template>
  <div>
    <nav class="nav-bar">
      <ul class="list-items">
        <li on:click="handle">
          <span class="logo">Music</span>
          <span class="next-logo">Forest</span>
        </li>
        <li></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    handle: () => {
      window.location.href = '/';
    },
  },
};
</script>
<style>
/* @font-face {
  font-family: Amad;
  src: url(~@/assets/fonts/AMADEUS_.TTF);
} */
body {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: Amadeus;
  src: url(~@/assets/fonts/Amadeus.ttf);
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav-bar {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  box-shadow: 2px 5px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
  z-index: 99;
}
.nav-bar ul {
  margin: 0px;
}
ul li {
  list-style-type: none;
  cursor: pointer;
}
.list-items {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.logo {
  font-family: Amadeus;
  /* text-transform: uppercase; */
  color: #000;
  line-height: 50px;
  flex: 0;
  /* font-weight: 600; */
  font-size: 40px;
  margin-left: 70px;
}
.next-logo {
  font-family: "Ubuntu", sans-serif;
  /* text-transform: uppercase; */
  color: rgb(16, 146, 81);
  font-size: 20px;
  margin-left: 5px;
}
.container-main {
  max-width: 80%;
  margin: 0 auto;

  padding: 10px;
}
</style>
