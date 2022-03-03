<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <div class="connect">
          <div class="connect-text">
            Mint your NFT: <b>4,342 / 10,000 NFTs</b>
          </div>
          <button class="btn btn-primary connect-button" @click="connect">
            Connect with MetaMask
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Web3 = require("web3");

import { jsonInterface } from "@/abi";

export default {
  name: "ConnectThing",
  data: () => ({
    jsonInterface,
  }),
  methods: {
    async connect() {
      {
        if (window.ethereum) {
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((accounts) => {
              window.web3 = new Web3(window.ethereum);
              console.log(accounts);
              // eslint-disable-next-line no-undef
              const myContract = new web3.eth.Contract(
                this.jsonInterface,
                "0x226085a82CD74e4A1778f73081D15Ed299bF1906",
                {
                  from: accounts[0],
                }
              );
              console.log(myContract.methods);
              myContract.methods.safeMint(1).send({
                from: accounts[0],
                value: "10000000000000000",
              });
              debugger;
            });
          return true;
        }
        return false;
      }
    },
  },
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
