<template>
  <div class="container">
    <div class="row">
      <div class="hero-counter">
        <div class="counter">
          <div v-for="(item, index) in digits" :key="index">
            <div class="counter__digit">
              <div class="counter__digit__splitter"></div>
              {{ item }}
            </div>
          </div>
        </div>
        <div class="counter__text">
          <div class="counter__text__currency">PLN</div>
          <div class="counter__text__description">We have raised</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCounter",
  props: ["count"],
  computed: {
    digits() {
      return this.count.toString().split("");
    },
  },
};
</script>

<style scoped>
.counter {
  display: flex;
  padding: 3rem 0;
  font-size: 5rem;
}

.counter__text {
  padding: 0 1rem;
}

.counter__text__currency {
  font-size: 4rem;
  line-height: 4rem;
}

.counter__digit {
  background: #064c9f;
  border-radius: 0.75rem;
  margin: 0 0.5rem;
  padding: 0.25rem 1.5rem;
  position: relative;
  font-family: "Fredoka One", sans-serif;
}

.counter__digit__splitter {
  height: 3px;
  background: #0059c2;
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  right: 0;
}

.hero-counter {
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
