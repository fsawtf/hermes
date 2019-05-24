<template>
  <div class="path" :class="{active:active}">
    <div class="path__block">
      <p class="path__label is-poppins">Sim, pussuo um convite</p>
    </div>
    <div class="path__block">
      <p class="path__label is-poppins">Não, eu não tenho um convite</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.active = true;
    }, 0);
  }
};
</script>

