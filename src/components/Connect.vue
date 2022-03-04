<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <div class="connect">
          <div class="connect-text">
            Mint your NFT: <b>{{ mintedTokenCount }} / 10,000 NFTs</b>
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

const CONTRACT_ADDRESS = "0xCdc7A8119B8F6820AFAC6238120a294D52D38330";
// const NETWORK_ID = 4; // Staging (Rinkeby)
const NETWORK_ID = "1"; // Production (Mainnet)
const { ethereum } = window;

export default {
  name: "ConnectThing",
  props: ["mintedTokenCount"],
  data: () => ({
    jsonInterface,
  }),
  methods: {
    toast_error(message) {
      this.$toast.error(message, {
        timeout: 10000,
        position: "bottom-right",
      });
    },

    async connect() {
      {
        const isMetaMaskInstalled = ethereum && ethereum.isMetaMask;

        if (isMetaMaskInstalled) {
          ethereum
            .request({ method: "eth_requestAccounts" })
            .then(async (accounts) => {
              window.web3 = new Web3(ethereum);
              try {
                const networkId = await ethereum.request({
                  method: "net_version",
                });

                if (networkId === NETWORK_ID) {
                  // eslint-disable-next-line no-undef
                  const myContract = new web3.eth.Contract(
                    this.jsonInterface,
                    CONTRACT_ADDRESS,
                    {
                      from: accounts[0],
                      gas: "30000000000000000",
                    }
                  );
                  myContract.methods
                    .mint(2)
                    .estimateGas({
                      from: accounts[0],
                    })
                    .then((gas) => {
                      console.log(gas);
                      myContract.methods.mint(1).send({
                        from: accounts[0],
                        value: "30000000000000000",
                        gas: gas,
                      });
                    });
                } else {
                  this.toast_error("Connected to wrong network");
                }
              } catch (error) {
                this.toast_error(error.toString());
              }
            });

          return true;
        } else {
          this.toast_error("Metamask not installed");
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
