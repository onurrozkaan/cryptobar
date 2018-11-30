<script>
import navbarCurrency from "./components/navbarCurrency.vue";
import differentOfCurrency from "./components/differentOfCurrency.vue";

export default {
  data: function() {
    return {};
  },
  mounted() {},
  name: "cryptobar",
  props: {},
  methods: {},
  components: {
    navbarCurrency,
    differentOfCurrency
  }
};
</script>
<template>
  <header class="header-area" id="app">
    <div class="top-header">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <!-- Breaking News Area -->
          <div class="col-12 col-md-6">
            <div class="breaking-news-area">
              <div id="breakingNewsTicker" class="ticker"></div>
            </div>
          </div>
          <!-- Stock News Area -->
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
      </div>
    </div>
  </header>
</template>