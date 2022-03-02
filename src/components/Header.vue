<template>
  <div class="header container">
    <div class="row justify-content-between">
      <div class="col col-auto mr-auto">
        <div class="header__logo">
          <img class="img-fluid" src="../assets/logo.svg" alt="" />
        </div>
      </div>
      <div class="col col-auto mr-auto">
        <div class="header__links d-flex">
          <a :href="DISCORD_URL" class="stretched header__links-item">
            <img src="../assets/discord_logo.svg" alt="Discord icon" />
          </a>
          <a :href="TWITTER_URL" class="stretched header__links-item">
            <img src="../assets/twitter_logo.svg" alt="Twitter icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    this.DISCORD_URL = "https://discord.gg/beep";
    this.TWITTER_URL = "https://twitter.com/boop";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header__logo > img {
    height: 4rem;
}

.raised_counter {
  font-size: 8rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 7.5rem;
  margin-bottom: 7.5rem;
}

.header {
  padding-top: 4rem;
}

.header__links-item {
  width: 4rem;
  height: 4rem;
  margin-left: 1.5rem;
  background: #064c9f;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.header__brand {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 21.875rem;
  transform: translate(-50%, -50%);
}
</style>
