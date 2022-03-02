<template>
  <div class="container-fluid">
    <div class="row">
      <div class="gallery">
        <carousel-3d :perspective="0" :space="400" :height="400" :width="400">
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
.gallery {
  width: 100%;
  height: 24rem;
  margin-bottom: 6rem;
}
</style>
