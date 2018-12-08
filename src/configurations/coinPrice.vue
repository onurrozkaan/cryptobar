<script>
var symbolApi = null;
var nameApi = null;
var symbolApi2 = null;
var nameApi2 = null;
var listMoney = [];
document.write(
  "<scr" +
    'ipt type="text/javascript" src="https://onurozkan.work/my/own/cdn/vue-cryptobar/jquery-2.2.4.min.js" ></scr' +
    "ipt>"
);
export default {
  name: "coinPrice",
  data() {
    return {
      price: 0,
      coinSymbol: null,
      isPositive: true
    };
  },
  mounted() {
    var holder = null;
    const vm = this;
    const axios = require("axios");
    const cc = require("cryptocompare");
    listMoney.push(vm.moneyType);

    axios
      .get("https://currency-symbol-api.herokuapp.com/" + listMoney[0])
      .then(function(response) {
        symbolApi = response.data.symbol;
        nameApi = response.data.code;
      })
      // eslint-disable-next-line
      .catch(function(error) {
        // console.log(error);
      });
    axios
      .get("https://currency-symbol-api.herokuapp.com/" + listMoney[5])
      .then(function(response) {
        symbolApi2 = response.data.symbol;
        nameApi2 = response.data.code;
      })
      // eslint-disable-next-line
      .catch(function(error) {
        //console.log(error);
      });

    function refreshFunction() {
      cc.price(vm.coinName, vm.moneyType).then(result => {
        var x = "x";
        var converting = 0;
        x = Object.values(result);
        converting = parseFloat(x);
        vm.price = converting.toFixed(2);

        if (null != holder && holder > vm.price) {
          vm.isPositive = true;
        }
        if (null != holder && vm.price > holder) {
          vm.isPositive = false;
        }

        holder = vm.price;

        function refreshSymbol() {
          if (nameApi == vm.moneyType) {
            while (vm.coinSymbol != symbolApi) {
              vm.coinSymbol = symbolApi;
            }
          }

          if (nameApi2 == vm.moneyType) {
            while (vm.coinSymbol != symbolApi2) {
              vm.coinSymbol = symbolApi2;
            }
          }
          setTimeout(refreshSymbol, 1 * 500);
        }
        refreshSymbol();
      });

      setTimeout(refreshFunction, 5 * 1000);
    }
    refreshFunction();
  },
  props: {
    coinName: {
      type: String
    },
    moneyType: {
      type: String
    },
    negative: {
      type: String
    },
    positive: {
      type: String
    },
    symbolColor: {
      type: String
    }
  }
};
</script>

<template>
  <div class="stock-index" :style="[isPositive ? {'color' : positive} : {'color': negative}]">
    <h4>
      <span class="specialX" :style="'color:'+symbolColor+';'">{{coinSymbol}}</span>
      {{price}}
    </h4>
  </div>
</template>

<style>
.single-stock-report .stock-index.minus-index h4,
.single-stock-report .stock-index.plus-index h4 {
  position: relative;
  z-index: 1;
  padding-left: 30px;
}

.single-stock-report .stock-index.minus-index h4:before,
.single-stock-report .stock-index.plus-index h4:before {
  content: "\e688";
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
  position: relative;
  z-index: 1;
  padding-left: 30px;
}

.single-stock-report .stock-index.minus-index h4:before,
.single-stock-report .stock-index.plus-index h4:before {
  content: "\e688";
  position: absolute;
  z-index: 1;
  top: 0;
  left: -10px;
  font-family: "Pe-icon-7-stroke";
  font-size: 44px;
  line-height: 32px;
}

.single-stock-report .stock-index.plus-index h4 {
}

.single-stock-report .stock-index.plus-index h4:before {
  content: "\e682";
}
.specialX {
  font-size: 15px;
  margin-right: -5px;
}
</style>
