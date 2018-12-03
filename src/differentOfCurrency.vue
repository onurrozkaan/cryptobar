<script>
document.write(
  unescape(
    "%3Cscript src='https://code.jquery.com/jquery-2.2.4.min.js' type='text/javascript'%3E%3C/script%3E"
  )
);
export default {
  name: "differentOfCurrency",
  data() {
    return {
    
      price: 0,
      coinSymbol: null,
      posCondition: null,
      negCondition: null,
      isActive: true
    };
  },
  mounted() {
    var holder = 0;
    const vm = this;
    const cc = require("cryptocompare");
    function refreshFunction() {
      cc.price(vm.coinName, vm.moneyType).then(result => {
        vm.posCondition = true;
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

        if (holder != 0 && holder > vm.price) {
          vm.posCondition = true;
          vm.negCondition = false;
        }
        if (holder != 0 && vm.price > holder) {
          vm.posCondition = false;
          vm.negCondition = true;
        }

        holder = vm.price;
      });
      setTimeout(refreshFunction, 5 * 1000);
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
  <div
    v-bind:class="{ active: isActive, 'minus-index': negCondition, 'plus-index': posCondition }"
    class="stock-index"
  >
    <h4>
      <span class="specialX">{{coinSymbol}}</span>
      {{price}}
    </h4>
  </div>
</template>

<style>
.single-stock-report .stock-index.minus-index h4,
.single-stock-report .stock-index.plus-index h4 {
  color: #c41e3a;
  position: relative;
  z-index: 1;
  padding-left: 30px;
}

.single-stock-report .stock-index.minus-index h4:before,
.single-stock-report .stock-index.plus-index h4:before {
  content: "\e688";
  color: #c41e3a;
  position: absolute;
  z-index: 1;
  top: 0;
  left: -10px;
  font-family: "Pe-icon-7-stroke";
  font-size: 44px;
  line-height: 32px;
}
.single-stock-report .stock-index.minus-index h4,
.single-stock-report .stock-index.plus-index h4 {
  color: #c41e3a;
  position: relative;
  z-index: 1;
  padding-left: 30px;
}

.single-stock-report .stock-index.minus-index h4:before,
.single-stock-report .stock-index.plus-index h4:before {
  content: "\e688";
  color: #c41e3a;
  position: absolute;
  z-index: 1;
  top: 0;
  left: -10px;
  font-family: "Pe-icon-7-stroke";
  font-size: 44px;
  line-height: 32px;
}

.single-stock-report .stock-index.plus-index h4 {
  color: #008d58;
}

.single-stock-report .stock-index.plus-index h4:before {
  content: "\e682";
  color: #008d58;
}
.specialX {
  color: #f2f0e6;
  font-size: 15px;
  margin-right: -5px;
}
</style>
