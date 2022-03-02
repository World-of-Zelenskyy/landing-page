<template>
  <div class="container">
    <div class="row">
      <div class="text-thing__header">{{ headerText }}</div>
      <div class="text-thing__body">
        <slot></slot>
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
.text-thing__header {
  color: #ffd500;
  padding-bottom: 2rem;
}

.text-thing__body {
  color: #fff;
}
</style>
