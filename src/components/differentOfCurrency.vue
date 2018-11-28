<script>
    export default {
        name: 'differentOfCurrency',
        data(){
            return{
                coinName: String,
                moneyType: String,
                price: null,
                priceDiff: 0,
                coinSymbol: null,
                posCondition: null,
                negCondition: null,
                isActive: true
            }
        },
        mounted(){
            const vm = this;
            const cc = require('cryptocompare');
            var holder = null;
            function refreshFunction(){
                cc.priceFull(vm.coinName, vm.moneyType)
                .then(result => {
               

                      var converterFirst = [];
                    converterFirst = Object.values(result);

          var converterSecond = [];
          converterSecond = Object.values(converterFirst[0]);

          var converterLast = [];
          converterLast = Object.values(converterSecond[0]);
           vm.priceDiff = converterLast[7].toFixed(2);
          

                    switch(vm.moneyType){
                        case 'TRY':
                            vm.coinSymbol='₺';
                            break;
                        case 'USD':
                            vm.coinSymbol='$';
                    }
                   
                }).catch(console.error)

               
                             
                setTimeout(refreshFunction, 1 * 1000);
            }
            refreshFunction();
            
        },
        props:{
            coinName: String,
            moneyType: String
        },
    }
</script>

<template>
<div v-bind:class="{ active: isActive, 'minus-index': negCondition, 'plus-index': posCondition }" class="stock-index">
    <h4>
      {{priceDiff}}
  </h4>
</div>
</template>
