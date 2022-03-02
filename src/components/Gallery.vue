<template>
  <div class="container-fluid">
    <div class="row">
      <div class="gallery">
        <carousel-3d
          :perspective="50"
          :space="400"
          :height="400"
          :width="400"
          :border="0"
          :controlsVisible="true"
        >
          <slide v-for="(item, index) in images" :index="index" :key="index">
            <img :src="getImageUrl(item.split('/').pop())" alt="" />
          </slide>
        </carousel-3d>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

const samples = require.context("../assets/samples", false, /^.*\.png$/);
console.log(samples.keys());
export default {
  name: "HeroCounter",
  components: { Carousel3d, Slide },
  computed: {
    images() {
      return samples.keys();
    },
  },
  methods: {
    getImageUrl(image) {
      return require("../assets/samples/" + image);
    },
  },
};
</script>

<style scoped>
.carousel-3d-slide {
  border-radius: 15%;
  border: none;
  box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 0.5);
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
    visibility 500ms ease 0s, box-shadow 0.3s ease-in-out !important;
}

.carousel-3d-slide.current {
  box-shadow: 25px 25px 15px 5px rgba(0, 0, 0, 0.5);
}

.carousel-3d-container {
  height: 445px !important;
}

.gallery {
  width: 100%;
  height: 24rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>

<style>
.next,
.prev {
  color: #ffd700 !important;
}
</style>
