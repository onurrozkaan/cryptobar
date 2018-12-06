<script>
import tradeMarket from "./tradeMarket.vue";
import coinPrice from "./coinPrice.vue";

export default {
  data: function() {
    return {};
  },
  mounted() {},
  name: "cryptobar",
  props: {
    coinNameConfig: {
      /* eslint-disable */
      default: ["BTC", "ETH", "XRP"],
      type: Array
    },
    coinTypeConfig: {
      /* eslint-disable */
      default: ["USD", "TRY"],
      type: Array
    }
  },
  methods: {},
  components: {
    tradeMarket,
    coinPrice
  }
};
document.write(
  "<scr" +
    'ipt type="text/javascript" src="https://onurozkan.work/my/own/cdn/vue-cryptobar/active.js" ></scr' +
    "ipt>"
);
document.write(
  "<scr" +
    'ipt type="text/javascript" src="https://onurozkan.work/my/own/cdn/vue-cryptobar/jquery-2.2.4.min.js" ></scr' +
    "ipt>"
);
</script>
<template>
  <header id="app">
    <div class="top-header">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <!-- Breaking News Area -->
          <div class="col-12 col-md-6">
            <div>
              <div id="breakingNewsTicker" class="ticker"></div>
            </div>
          </div>
          <!-- Stock News Area -->
          <div class="col-12 col-md-6">
            <div>
              <div id="stockNewsTicker" class="ticker">
                <ul>
                  <li>
                    <div class="single-stock-report">
                      <tradeMarket :coinName="coinNameConfig[0]" :moneyType="coinTypeConfig[0]"/>
                      <coinPrice :coinName="coinNameConfig[0]" :moneyType="coinTypeConfig[0]"/>
                    </div>

                    <div class="single-stock-report">
                      <tradeMarket :coinName="coinNameConfig[1]" :moneyType="coinTypeConfig[0]"/>
                      <coinPrice :coinName="coinNameConfig[1]" :moneyType="coinTypeConfig[0]"/>
                    </div>

                    <div class="single-stock-report">
                      <tradeMarket :coinName="coinNameConfig[2]" :moneyType="coinTypeConfig[0]"/>
                      <coinPrice :coinName="coinNameConfig[2]" :moneyType="coinTypeConfig[0]"/>
                    </div>
                  </li>
                  <li>
                    <div class="single-stock-report">
                      <tradeMarket :coinName="coinNameConfig[0]" :moneyType="coinTypeConfig[1]"/>
                      <coinPrice :coinName="coinNameConfig[0]" :moneyType="coinTypeConfig[1]"/>
                    </div>

                    <div class="single-stock-report">
                      <tradeMarket :coinName="coinNameConfig[1]" :moneyType="coinTypeConfig[1]"/>
                      <coinPrice :coinName="coinNameConfig[1]" :moneyType="coinTypeConfig[1]"/>
                    </div>

                    <div class="single-stock-report">
                      <tradeMarket :coinName="coinNameConfig[2]" :moneyType="coinTypeConfig[1]"/>
                      <coinPrice :coinName="coinNameConfig[2]" :moneyType="coinTypeConfig[1]"/>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
@import url("https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css");

#breakingNewsTicker.ticker {
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
}
#breakingNewsTicker.ticker ul {
  width: 100%;
  position: relative;
}
#breakingNewsTicker.ticker ul li {
  display: none;
  width: 100%;
}
#breakingNewsTicker.ticker ul li a {
  color: #fff;
  font-size: 14px;
}
#stockNewsTicker.ticker {
  width: 100%;
  position: relative;
  overflow: hidden;
  opacity: 0.86;
  background-color: #141b2b;
  border-radius: 10px;
}

#stockNewsTicker.ticker ul {
  width: 100%;
  position: relative;
}

#stockNewsTicker.ticker ul li {
  display: none;
  width: 100%;
  text-align: center;
  margin-left: 6.5px;
}

#stockNewsTicker.ticker ul li a {
  color: #fff;
  font-size: 14px;
}

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

.single-stock-report .stock-index h4 {
  color: #fff;
  margin-bottom: 0;
}

.single-stock-report {
  border-right: 2px solid rgba(255, 255, 255, 0.05);
  margin-right: 20px;
  display: inline-block;
  text-align: left;
}

.single-stock-report:last-child {
  border-right: none;
  margin-right: 0;
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

.mainNav {
  background-color: #100b26 !important;
  display: flex;
  margin-left: 50vh;
  margin-right: 60vh;
  flex: 0 0 auto;
  white-space: nowrap;
  border-radius: 5px;
}
.specialX {
  color: #f2f0e6;
  font-size: 15px;
  margin-right: -5px;
}
.top-header {
  position: relative;
  z-index: 1;
  height: 70px;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.h-100 {
  height: 100% !important;
}
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.align-items-center {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .top-header {
    height: auto;
    padding: 20px 0;
  }
}
</style>
