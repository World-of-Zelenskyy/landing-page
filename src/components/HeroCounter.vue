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
          <div class="counter__text__currency">USD</div>
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

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.counter {
  display: flex;
  padding: 3rem 0;
  font-size: 5rem;

  @include mq("tablet-narrow", "max") {
    font-size: 3rem;
    padding: 1.5rem 0;
  }

  &__text {
    padding: 0 1rem;
  }
  &__digit {
    background: #064c9f;
    border-radius: 0.75rem;
    margin: 0 0.5rem;
    padding: 0.25rem 1.5rem;
    position: relative;
    line-height: 8rem;
    font-family: "Oswald", sans-serif;
    @include mq("tablet-narrow", "max") {
      line-height: 5rem;
      padding: 0.25rem 0.75rem;
    }
  }
  &__digit {
    &__splitter {
      height: 3px;
      background: #0059c2;
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      right: 0;
      @include mq("tablet-narrow", "max") {
        height: 2px;
      }
    }
  }
  &__text__currency {
    font-size: 4rem;
    line-height: 4rem;
    @include mq("tablet-narrow", "max") {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }
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
  @include mq("tablet-narrow", "max") {
    flex-direction: column;
  }
}
</style>
