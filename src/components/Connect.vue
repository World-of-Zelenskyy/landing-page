<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <div class="connect">
          <div class="connect-text">
            Mint your NFT: <b>4,342 / 10,000 NFTs</b>
          </div>
          <button class="btn btn-primary connect-button">
            Connect with MetaMask
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConnectThing",
};
</script>

<style scoped>
.connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.connect-text {
  font-weight: 500;
  color: #ffffff;
}

.connect-button {
  color: black;
  border-radius: 2rem;
  background: #ffd700;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
}
</style>
