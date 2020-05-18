<template>
  <div class="video-container">
    <videoPlayer
      class="vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
    ></videoPlayer>
    <div class="cont-description">
      <div>
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14Gg04wX4fIl8ANF5Ni580t5CNPffSAFW7SN1sqWP-Q"
          width="50px"
          height="50px"
          style="border-radius:50%;margin-top:10px"
        />
      </div>
      <div style="display:flex;flex-direction:column;margin-left:15px;">
        <h5 class="title_ofvideo">{{ datas[0].title }}</h5>
        <div
          style="margin-top:0px;
          font-size:1rem;
          margin-bottom:0px;
          font-family: 'Ubuntu', sans-serif;;
          color:#464444;

          padding-right: 10px"
        >{{ datas[0].description }}</div>
        <small class="time">Uploaded - {{ reduceMe(datas[0].time) }}</small>
      </div>
    </div>
  </div>
</template>
<script>
// require styles

import './custom-skin.css';
import { videoPlayer } from 'vue-video-player';
import './video-js.css';
import moment from 'moment';

export default {
  data() {
    const datas = JSON.parse(localStorage.posts);

    return {
      // videojs options
      datas: JSON.parse(localStorage.posts),
      playerOptions: {
        height: '300',
        autoplay: true,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            // mp4
            src: datas[0].video,
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          },
        ],
        poster: datas[0].thumbnail_photo,
      },
    };
  },
  components: {
    videoPlayer,
  },
  mounted() {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';

      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })

      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false);
    }, 5000);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    // listen event
    playerReadied(player) {
      // seek to 10s

      player.currentTime(10);
      // console.log('example 01: the player is readied', player)
    },
    reduceMe: (data) => moment(data).from(),
  },
};
</script>
<style scoped>
.cont-description {
  flex: 1;
  display: flex;
  background: #ebebeb;
  font-size: 20px;
  height: auto;
  padding: 10px;
  flex-direction: row;
}
.title_ofvideo {
  margin: 0px;
  line-height: 50px;

  font-family: 'Ubuntu', sans-serif;
}
.video-container {
  /* top: 50px; */
  margin-top: 50px;
  min-width: 320px;
  width: 100%;
}
.time {
  font-size: 12px;
  font-family: 'Ubuntu', sans-serif;
  color: #606060;
  margin-top: 10px;
  float: right;
}
.download {
  text-decoration: none;
  padding: 10px;
  background: green;
  color: #fff;
  margin-left: 5px;
  border-radius: 6px;
}
</style>
