<template>
  <div id="app" style="background-color:#100b26!important;">
    <div class="col-12 col-md-6">
      <div class="stock-news-area">
        <div id="stockNewsTicker" class="ticker">
          <ul>
            <li>
              <div class="single-stock-report">
                <navbarCurrency coinName="BTC" moneyType="USD"/>
                <differentOfCurrency coinName="BTC" moneyType="USD"/>
              </div>

              <div class="single-stock-report">
                <navbarCurrency coinName="ETH" moneyType="USD"/>
                <differentOfCurrency coinName="ETH" moneyType="USD"/>
              </div>

              <div class="single-stock-report">
                <navbarCurrency coinName="XRP" moneyType="USD"/>
                <differentOfCurrency coinName="XRP" moneyType="USD"/>
              </div>
            </li>
            <li>
              <div class="single-stock-report">
                <navbarCurrency coinName="BTC" moneyType="TRY"/>
                <differentOfCurrency coinName="BTC" moneyType="TRY"/>
              </div>

              <div class="single-stock-report">
                <navbarCurrency coinName="ETH" moneyType="TRY"/>
                <differentOfCurrency coinName="ETH" moneyType="TRY"/>
              </div>

              <div class="single-stock-report">
                <navbarCurrency coinName="XRP" moneyType="TRY"/>
                <differentOfCurrency coinName="XRP" moneyType="TRY"/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarCurrency from "./components/navbarCurrency.vue";
import differentOfCurrency from "./components/differentOfCurrency.vue";

export default {
  data: function() {
    return {
      bitcoinUSD: 0,
      ethereumUSD: 0,
      rippleUSD: 0,
      stellarUSD: 0,
      //
      bitcoinTRY: 0,
      ethereumTRY: 0,
      rippleTRY: 0,
      stellarTRY: 0,
      //
      btcDiffUsd: [0, "+"],
      ethDiffUsd: 0,
      xrpDiffUsd: 0,
      xlmDiffUsd: 0,
      //
      btcdiffTry: 0,
      ethDiffTry: 0,
      xrpDiffTry: 0,
      xlmDiffTry: 0
    };
  },
  mounted() {
    const vm = this;
    const cc = require("cryptocompare");

    function refreshFunction() {
      cc.price("BTC", "USD")
        .then(btc => {
          var x = "x";
          x = Object.values(btc);
          vm.bitcoinUSD = parseFloat(x);
        })
        .catch(console.error);

      cc.price("ETH", "USD")
        .then(eth => {
          var x = "x";
          x = Object.values(eth);
          vm.ethereumUSD = parseFloat(x);
        })
        .catch(console.error);

      cc.price("XRP", "USD")
        .then(xrp => {
          var x = "x";
          x = Object.values(xrp);
          vm.rippleUSD = parseFloat(x);
        })
        .catch(console.error);

      cc.price("XLM", "USD")
        .then(dash => {
          var x = "x";
          x = Object.values(dash);
          vm.stellarUSD = parseFloat(x);
        })
        .catch(console.error);

      cc.price("BTC", "TRY")
        .then(btc => {
          var x = 0;
          var converting = 0;
          x = Object.values(btc);
          converting = parseFloat(x);
          vm.bitcoinTRY = converting.toFixed(2);
        })
        .catch(console.error);

      cc.price("ETH", "TRY")
        .then(eth => {
          var x = "x";
          x = Object.values(eth);
          vm.ethereumTRY = parseFloat(x);
        })
        .catch(console.error);

      cc.price("XRP", "TRY")
        .then(xrp => {
          var x = "x";
          x = Object.values(xrp);
          vm.rippleTRY = parseFloat(x);
        })
        .catch(console.error);

      cc.price("XLM", "TRY")
        .then(dash => {
          var x = "x";
          x = Object.values(dash);
          vm.stellarTRY = parseFloat(x);
        })
        .catch(console.error);

      setTimeout(refreshFunction, 1 * 1000);
    }
    refreshFunction();
  },
  name: "app",
  props: {
    //
  },
  methods: {},
  components: {
    navbarCurrency,
    differentOfCurrency
  }
};
</script>