<template>
  <div class="footer container">
    <div class="row">
      <div class="col">
        <div class="footer__splitter"></div>
        <Header />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: { Header },
  name: "FooterThing",
};
</script>

<style scoped>
.footer__splitter {
  height: 1px;
  background: #ffffff;
  margin-top: 4rem;
}

.footer {
  margin-bottom: 4rem;
}
</style>
