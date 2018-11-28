<script>
export default {
  name: "navbarCurrency",
  data() {
    return {
      coinName: String,
      moneyType: String,
      lastTradeFrom: null,
      differentSign: null,
      coinSymbol: null
    };
  },
  mounted() {
    const vm = this;
    const cc = require("cryptocompare");
    var holder = null;
    function refreshFunction() {
      cc.priceFull(vm.coinName, vm.moneyType)
        .then(result => {
          vm.posCondition = true;
          var converterFirst = [];
          converterFirst = Object.values(result);

          var converterSecond = [];
          converterSecond = Object.values(converterFirst[0]);

          var converterLast = [];
          converterLast = Object.values(converterSecond[0]);
          vm.lastTradeFrom = converterLast[20];

          switch (vm.moneyType) {
            case "TRY":
              vm.coinSymbol = "₺";
              break;
            case "USD":
              vm.coinSymbol = "$";
          }
        })
        .catch(console.error);

      setTimeout(refreshFunction, 2.5 * 1000);
    }
    refreshFunction();
  },
  props: {
    coinName: String,
    moneyType: String
  }
};
</script>
<template>
  <div class="stock-values" style="color: #2e7d32;">
    <span style="color:#eee;">{{coinName}}/{{moneyType}}</span>
    <span style="color:#c41e3a;">{{lastTradeFrom}}</span>
  </div>
</template>