<script>
export default {
  name: "differentOfCurrency",
  data() {
    return {
      coinName: String,
      moneyType: String,
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
  <div
    v-bind:class="{ active: isActive, 'minus-index': negCondition, 'plus-index': posCondition }"
    class="stock-index"
  >
    <h4>{{price}}</h4>
  </div>
</template>
