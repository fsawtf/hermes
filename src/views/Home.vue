<template>
  <div class="home">
    <aside class="home-sidemenu">
      <svg
        class="home-logo"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="88.106"
        height="56.084"
        viewBox="0 0 88.106 56.084"
      >
        <defs>
          <linearGradient id="a" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#d5130f"></stop>
            <stop offset="1" stop-color="#f4711b"></stop>
          </linearGradient>
        </defs>
        <g transform="translate(0)">
          <path
            d="M2379.949,458.582l-2.087-1.8,25.1-29.078a10.224,10.224,0,0,1,2.846-2.248c.135-.079.273-.16.413-.245a21.065,21.065,0,0,1,24.426,2.139,36.485,36.485,0,0,1-50.7,31.234Zm47.095-27.06a15.5,15.5,0,0,0-17.964-1.6c-.165.1-.328.2-.489.289a4.981,4.981,0,0,0-1.454,1.091l-21.332,24.712a15.082,15.082,0,0,0,17.683-1.826l1.837-1.66,1.847,1.648c.043.038.084.076.126.114l.051.046a15.071,15.071,0,0,0,19.695-22.818Z"
            transform="translate(-2377.862 -407.499)"
            fill="#c8bfbc"
          ></path>
          <path
            d="M2569.442,366.012h-35.656a9.072,9.072,0,0,0-3.165.7,18.222,18.222,0,0,0-12.436,17.264,17.828,17.828,0,0,0,35.657,0c0-.095-.006-.187-.007-.281A17.827,17.827,0,0,0,2569.442,366.012Z"
            transform="translate(-2481.336 -366.012)"
            fill="url(#a)"
          ></path>
          <path
            d="M2469.043,463.583A20.608,20.608,0,0,1,2448.458,443a21.064,21.064,0,0,1,14.342-19.886c.155-.051.306-.1.455-.153a10.226,10.226,0,0,1,3.561-.685h38.414v2.757a20.612,20.612,0,0,1-15.7,20A20.615,20.615,0,0,1,2469.043,463.583Zm-2.227-35.8a4.979,4.979,0,0,0-1.776.388c-.176.06-.354.121-.539.18A15.494,15.494,0,0,0,2453.972,443a15.071,15.071,0,0,0,30.143,0l0-.065q0-.089,0-.178l-.034-2.469,2.451-.3a15.082,15.082,0,0,0,12.937-12.192Z"
            transform="translate(-2429.919 -407.499)"
            fill="#fff"
          ></path>
        </g>
      </svg>
      <div class="home-sidemenu__banner">
        <h1 class="home-sidemenu__title is-poppins">Recepção Virtual</h1>
      </div>
      <div class="home-sidemenu__content">
        <p class="home-sidemenu__text">
          Seja bem vindo a recepção virtual Hermes, para prosseguir você só
          precisa selecionar a empresa a qual tem algo a tratar
          <span
            class="home-sidemenu__indicator"
          >Selecione ></span>
        </p>
      </div>
    </aside>
    <main class="home-content">
      <div class="home-content__screen animate" :style="{backgroundImage:backgroundImg}">
        <!-- OPTIONS -->
        <div class="home-panel">
          <app-panel @loadPanel="loadPanel" v-for="panel in panels" :key="panel._id" :data="panel"></app-panel>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Panel from "@/components/Panel.vue";

export default {
  name: "home",
  data() {
    return {
      panels: [],
      backgroundImg: ""
    };
  },
  created() {
    fetch("http://localhost:3333/api/v1/companies")
      .then(response => {
        return response;
      })
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.panels = data;
      })
      .then(data => {
        this.backgroundImg = `url(img/${this.panels[0].background})`;
      });
  },
  methods: {
    loadPanel({ id, backgroundImg }) {
      this.backgroundImg = backgroundImg;
      let panels = document.querySelectorAll(".home-panel__option");
      if (!isNaN(id)) {
        for (var i = 0; i < panels.length; i++) {
          this.$children[i].active = true;
          //compare the Ids
          if (panels[i].id != id) {
            this.$children[i].active = false;
          }
        }
      }
    },
    addActive: elem => {
      elem.classList.add("active");
    },
    removeActive: elem => {
      elem.classList.remove("active");
    }
  },
  components: {
    appPanel: Panel
  }
};
</script>
