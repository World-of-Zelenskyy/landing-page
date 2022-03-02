<template>
  <div class="container">
    <div class="row">
      <div class="hero-counter">
        <div class="counter">
          <div class="counter__digit">
            <div class="counter__digit__splitter"></div>
            1
          </div>
          <div class="counter__digit">
            <div class="counter__digit__splitter"></div>
            0
          </div>
          <div class="counter__digit">
            <div class="counter__digit__splitter"></div>
            0
          </div>
          <div class="counter__digit">
            <div class="counter__digit__splitter"></div>
            5
          </div>
          <div class="counter__digit">
            <div class="counter__digit__splitter"></div>
            9
          </div>
          <div class="counter__digit">
            <div class="counter__digit__splitter"></div>
            2
          </div>
        </div>
        <div class="counter__text">
          <div class="counter__text__currency">PLN</div>
          <div class="counter__text__description">We've raised</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCounter",
};
</script>

<style scoped>
.counter {
  display: flex;
  padding: 4rem 0;
  font-size: 5rem;
}

.counter__text {
  padding: 0 1rem;
}

.counter__text__currency {
  font-size: 4rem;
}

.counter__digit {
  background: #064c9f;
  border-radius: 0.75rem;
  margin: 0 0.5rem;
  padding: 0.25rem 1.5rem;
  position: relative;
}

.counter__digit__splitter {
  height: 4px;
  background: #0059c2;
  position: absolute;
  top: calc(50% - 2px);
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
