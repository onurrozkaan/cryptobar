<script>
document.write(
  unescape(
    "%3Cscript src='https://code.jquery.com/jquery-2.2.4.min.js' type='text/javascript'%3E%3C/script%3E"
  )
);
export default {
  name: "navbarCurrency",
  data() {
    return {
      
      lastTradeFrom: null,
      differentSign: null,
      coinSymbol: null
    };
  },
  mounted() {
    const vm = this;
    const cc = require("cryptocompare");

    function refreshFunction() {
      cc.priceFull(vm.coinName, vm.moneyType).then(result => {
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
      });

      setTimeout(refreshFunction, 5 * 1000);
    }
    refreshFunction();
  },
  props: {
    // eslint-disable-next-line
    coinName: String,
    // eslint-disable-next-line
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

<style>
.single-stock-report .stock-values span {
  padding-right: 20px;
  color: #fff;
  font-weight: 300;
  font-size: 13px;
  text-transform: uppercase;
}

.single-stock-report .stock-values span:last-child {
  color: rgba(255, 255, 255, 0.5);
}
</style>
