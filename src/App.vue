<template>
  <div>
    <Header />
    <HeroCounter :count="status.raised_usd_count" />
    <TextThing header-text="#worldofzelenskyy">
      World of Zelenskyy is a collection of 10,000 NFTs that honor the man, the
      myth, the legend, <b>Volodymyr Zelenskyy</b>. <br /><br />
      Each NFT will be unique and represent the glory that is Ukraine.
      <br /><br />
      The collection is linked to the official Ukrainian ETH donation address,
      so there is no middle-man handling the money.
    </TextThing>
    <Gallery />
    <Connect :mintedTokenCount="status.minted_token_count" />
    <TextThing header-text="You wonder what the hell?">
      World of Zelensky is a collection of 10,000 unique NFTs that depict
      <b>Volodymyr Zelenskyy</b> as the courageous leader he is.
      <br />
      We live in a generation where PFPs open a new door for donating to the
      cause while also enabling a unique form of spreading awareness. WoZ aims
      to bridge donating with PFPs in a way that goes directly to the source.
      <br /><br />
      <b>100% of all sales and profits</b> from the collection and secondary
      market will be sent directly to the official Ukrainian ETH wallet:
      <br />
      <a
        href="https://etherscan.io/address/0x165CD37b4C644C2921454429E7F9358d18A45e14"
        >https://etherscan.io/address/0x165CD37b4C644C2921454429E7F9358d18A45e14</a
      >
      <br />
      <a href="https://twitter.com/ukraine/status/1497594592438497282"
        >https://twitter.com/ukraine/status/1497594592438497282</a
      >
      <br /><br />
      Check out the World of Zelensky smart contract:
      <br />
      <!-- TODO: REPLACE WITH PRODUCTION LINK -->
      <a
        href="https://rinkeby.etherscan.io/token/0x38ed68ca9450fd87c9fccb241494b53296c193b6?a=0"
      >
        https://rinkeby.etherscan.io/token/0x38ed68ca9450fd87c9fccb241494b53296c193b6?a=0</a
      >
      <br /><br />
      Time to build a better world.
    </TextThing>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import TextThing from "./components/TextThing.vue";
import HeroCounter from "./components/HeroCounter.vue";
import Footer from "./components/Footer.vue";
import Connect from "./components/Connect.vue";
import Gallery from "./components/Gallery.vue";

export default {
  name: "App",
  components: {
    Header,
    HeroCounter,
    TextThing,
    Footer,
    Connect,
    Gallery,
  },
  data() {
    return {
      status: {
        minted_token_count: "????",
        raised_eth_count: "????",
        raised_usd_count: "????",
      },
    };
  },
  mounted() {
    axios
      .get("https://api.worldofzelensky.com/worldOfZelenskyStats")
      .then((response) => (this.status = response.data));
  },
};
</script>

<style>
body {
  background: #0059c2;
  font-family: "Lato", sans-serif;
}

a {
  color: #ffd700;
}

@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 1040px;
  }
}
</style>
