<template>
  <div id="app">
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
export default {
  name: "app",
  components: {}
};
</script>