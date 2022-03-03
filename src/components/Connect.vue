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

const ETH_ADDRESS = "0x226085a82CD74e4A1778f73081D15Ed299bF1906";
const NETWORK_ID = 4; // Staging (Rinkeby)
const { ethereum } = window;

export default {
  name: "ConnectThing",
  data: () => ({
    jsonInterface,
  }),
  methods: {
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

                if (networkId == NETWORK_ID) {
                  // eslint-disable-next-line no-undef
                  const myContract = new web3.eth.Contract(
                    this.jsonInterface,
                    ETH_ADDRESS,
                    {
                      from: accounts[0],
                    }
                  );
                  myContract.methods.safeMint(1).send({
                    from: accounts[0],
                    value: "10000000000000000",
                  });
                } else {
                  // TODO: Notify user something went wrong
                  console.log("Connected to wrong network");
                }
              } catch (error) {
                // TODO: Notify user something went wrong
                console.log(error);
              }
            });

          return true;
        } else {
          // TODO: Ask user to install Metamask
          console.log("Metamask not installed");
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
