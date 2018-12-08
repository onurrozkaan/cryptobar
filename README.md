<h1 align="center"> vue-cryptobar </h1>

<p align="center">
<img src="https://user-images.githubusercontent.com/39852038/49454475-47989e80-f7f6-11e8-8f66-6305ffec0dcb.gif"/>
</p>

<p align="center">
  <img src="https://travis-ci.com/onurrozkaan/vue-cryptobar.svg"/>
  <img src="https://badge.fury.io/js/vue-cryptobar.svg"/>
  <img src="https://img.shields.io/badge/node%20version-8.4.0-blue.svg"/>
  <img src="https://img.shields.io/github/stars/onurrozkaan/vue-cryptobar.svg"/>
  <img src="https://img.shields.io/github/issues/onurrozkaan/vue-cryptobar.svg"/>
  <img src="https://img.shields.io/github/license/onurrozkaan/vue-cryptobar.svg"/>
</p>

<br>

# About vue-cryptobar

##### Vue-cryptobar is a cryptocurrency tool for Vue developers which looks really modern and clear also can be re-styled with configurations. It shows current prices with colors depending on the positive-negative values and also shows the market name which did the last transition.

#### Before the installation vue-cryptobar requires Node and Vue.js to run.

## Installation

##### Install the vue-cryptobar on your vue project:

```sh
$ npm install --save vue-cryptobar
```

## To using vue-cryptobar

##### Add 'cryptobar' to inside of your 'components' section, after then:

```sh
import cryptobar from "vue-cryptobar"
```

##### And last thing to do is:

```sh
<cryptobar/>
```

# Configurations
#### Values
##### Default coins are Bitcoin, Ethereum, Ripple and default currencies are USD and TRY. To make cryptobar with specific values you have to go on options like: 

```sh
<cryptobar
    :coin-name-config="['BTC','ETH','XRP']" 
    :coin-type-config="['USD', 'TRY']"
  />
```
#### Styling
#### The cryptobar can be re-styled to your preferred colors. Default style of the cryptobar is as in the gif above.  For re-styling you can put in any color value such as, hex, rgb or direct color name.

<p align="center">
<img src="https://user-images.githubusercontent.com/39852038/49684088-e87da700-fadf-11e8-9f42-41535f00db60.png"/>
</p>

#### With example:

```sh
<cryptobar
     bar-color="rgb(192, 192, 192)"
     positive-price-color="#253121"
     negative-price-color="orange"
     currency-symbol-color="#212121"
     name-and-currency-color="rgb(255, 255, 255)"
     trade-market-color="yellow"
  />
```

##### With next patches vue-cryptobar will be much more adjustable and flexible.
##### About feedback or any kind of help mail me to onurrozkaan@gmail.com.
