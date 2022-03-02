<template>
  <div>
    <Header />
    <HeroCounter />
    <TextThing header-text="#worldofzelenskyy">
      World of Zelenskyy is a collection of 10,000 NFTS that honor the man, the
      myth, the legend, Volodymyr Zelenskyy. Each NFT will be unique and
      represent the glory that is Ukraine.
      <br /><br />
      The collection will be linked to the official Ukrainian ETH donation
      address so that there is no middle-man handling the money.
    </TextThing>
    <Connect />
    <Gallery />
    <TextThing header-text="You wonder what the hell?">
      World of Zelensky was built with the goal to support the country of
      Ukraine during these hard times.
      <br />
      While the brave people fight to protect their land, we must step up and
      help however we can.
      <br />
      WoZ pfp’s are meant to empower the symbol of their courageous president
      and support the people of Ukraine by directly linking the sales to their
      cause.
      <br /><br />
      100% of all sales and profits from the collection and secondary market
      will be sent directly to the official Ukrainian ETH wallet:
      <br />
      https://etherscan.io/address/0x165CD37b4C644C2921454429E7F9358d18A45e14
      <br />
      World of Zelensky smart contract:
      <br />
      >???
      <br /><br />
      Let's help build a better world.
    </TextThing>
    <Footer />
  </div>
</template>

<script>
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
};
</script>

<style>
body {
  background: #0059c2;
  font-family: "Lato", sans-serif;
}
</style>
