<template>
  <div class="flexthemain">
    <Player style="flex:1" />
    <Recommend />
  </div>
</template>
<script>
import Recommend from '../components/Recommentation/Recommond.vue';
import Player from '../components/Player/Player.vue';

export default {
  components: {
    Player,
    Recommend,
  },
};
</script>
<style>
.flexthemain {
  display: flex;
  /* flex-direction: column; */
}

@media (max-width: 768px) {
  .flexthemain {
    flex-direction: column;
  }
}
</style>
