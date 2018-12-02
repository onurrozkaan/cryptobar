<script>
import cryptobar from "./components/cryptobar.vue";

export default {
  name: "app",
  data: function() {
    return {};
  },
  components: {
    cryptobar
  }
};
</script>

<template>
  <div>
    <cryptobar :coin-name-config="['BTC','ETH','XRP']" :coin-type-config="['USD', 'TRY']"/>
  </div>
</template>

<style>
</style>
