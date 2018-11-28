<script>
export default {
  name: "navbarCurrency",
  data() {
    return {
      coinName: String,
      moneyType: String,
      price: null,
      priceDiff: null,
      differentSign: null,
      coinSymbol: null
    };
  },
  mounted() {
    const vm = this;
    const cc = require("cryptocompare");
    function refreshFunction() {
      cc.price(vm.coinName, vm.moneyType).then(result => {
        var x = "x";
        var converting = 0;
        x = Object.values(result);
        converting = parseFloat(x);
        vm.price = converting.toFixed(2);
        switch (vm.moneyType) {
          case "TRY":
            vm.coinSymbol = "₺";
            break;
          case "USD":
            vm.coinSymbol = "$";
        }
      });
      setTimeout(refreshFunction, 1 * 1000);
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
    <span>{{coinName}}/{{moneyType}}</span>
    {{coinSymbol}}
    <span>{{price}}</span>
  </div>
</template>