<template>
  <div class="container-sm">
    <div class="col">
      <div class="row text-thing">
        <div class="text-thing__header">{{ headerText }}</div>
        <div class="text-thing__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextThing",
  props: ["headerText"],
};
</script>

<style scoped>
.text-thing {
  font-size: 1.125rem;
}

.text-thing__header {
  color: #ffd700;
  padding-bottom: 1rem;
}

.text-thing__body {
  font-weight: 300;
  color: #fff;
}
</style>
