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
<h1 align="center"> vue-cryptobar </h1>
<br>

## Installation

##### (vue-cryptobar requires Node and Vue.js to run.)

Install the vue-cryptobar on your vue project:

```sh
$ npm install --save vue-cryptobar
```

## To using vue-cryptobar

#### Add 'cryptobar' to inside of your 'components' section, after then:

```sh
$ import cryptobar from "vue-cryptobar"
```

And last thing to do is configuration of vue-cryptobar. Like:

```sh
<cryptobar :coin-name-config="['BTC','ETH','XRP']" :coin-type-config="['USD', 'TRY']"/>
```

Its possible to put any 3 crypto coins and any 2 different coin type to that options. With next patches it will be much more adjustable and flexible. For 0.0.7beta version, that options are necessary to work properly.
