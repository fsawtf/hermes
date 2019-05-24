<template>
  <div class="home-panel__option" :id="data._id" @click="handleClick" :class="{active:active}">
    <div class="home-panel__brand">
      <img class="home-panel__img" :src="'img/' + data.logo">
    </div>
    <router-link to="/iden" tag="a" class="home-panel__btn">
      Para tratar com a
      <span class="home-panel__target">{{data.alias}}</span>&nbsp;
      <u>aperte aqui</u>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    data: ""
  },
  data() {
    return {
      active: false,
      backgroundImg: ""
    };
  },
  created() {
    //Set the panel background img
    this.backgroundImg = `url(img/${this.data.background})`;
    //active the index 0
    if (this.data._id == 1) {
      this.active = true;
      this.$emit("loadPanel", this.backgroundImg);
    }
  },
  methods: {
    handleClick() {
      this.active = true;
      var options = {
        backgroundImg: this.backgroundImg,
        id: this.data._id
      };
      this.$emit("loadPanel", options);
      this.$store.commit("setPageBackground", options.backgroundImg);
    }
  }
};
</script>
