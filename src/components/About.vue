<template>
  <section class="section-bg">
    <h3 style="text-align:center">About Me</h3>
    <div class="con-about-section">
      <div class="about-text">
        <header class="title">Elisha Kumar</header>
        <article class="description_of_waste_fellow">
          Praise the lord!! My aim is to praise the Lord by singing songs.
          Everyone should prepare
          for the final days⌛. I came across many difficulties and sorrow in my life,
          the lord our
          god saved me from these difficulties. In my childhood, I desire to make prayer meetings
          to
          the lord but it failed because
          I don't have enough money. Though the lord our saviour gave
          me a chance to praise him by singing songs.
          <br />
          <br />So Im saying thanks to the lord.
          In my childhood days, I suffered from a few diseases but
          god saved me from those diseases.
          In my teenage I suffered in studies, I didn't get enough
          marks in my exams, I thought those are the final days of my life but god helped to get
          good in my exams.
          In that time everyone hated me but my god didn't hate me, he loved me.
          So Im praising the Lord by singing songs. Glory be to the Lord. Amen!!
          <h3 class="secret">Elisha kumar</h3>

          <b>
            Note: The songs that I uploaded in this website is not mine, these songs are sung by
            many singers, I will remake it in my voice
          </b>
        </article>
      </div>
      <div class="photo-about"></div>
    </div>
  </section>
</template>
<style scoped>
@font-face {
  font-family: secret;
  src: url('../assets/fonts/TheSecret-Regular.ttf');
}
.section-bg {
  background: #ccc;
  /* width: 100%; */
  /* padding: 10px; */
  height: auto;
  font-family: 'Ubuntu', sans-serif;
  padding-bottom: 40px;
}
.con-about-section {
  display: flex;
  flex-wrap: wrap;
}
.photo-about {
  background: #fff url('../assets/IMG_20200313_171812-min.webp');
  background-size: cover;
  /* padding: 10px; */
  border-radius: 5px;
  width: 400px;
  /* height: 400px; */
  margin-right: 5px;
}
.about-text {
  flex: 1;
  padding: 30px;
}
h3 {
  margin-top: 0px;
  padding-top: 20px;
}
.title {
  font-size: 30px;
  padding-bottom: 20px;
}
.description_of_waste_fellow {
  border-top: 1px solid rgb(48, 46, 46);
  padding-top: 20px;
  font-size: 20px;
}
@media (max-width: 600px) {
  .photo-about {
    width: 100%;
    height: 500px;
    margin-right: 0px;
  }
  .section-bg {
    padding-bottom: 0px;
  }
}
.secret {
  font-family: secret;
}
</style>
