<p align="center">
<img src="https://user-images.githubusercontent.com/39852038/52539458-5750d800-2d8f-11e9-8f5c-948900b4de29.png"/>
</p>

<p align="center">
  <img src="https://img.shields.io/circleci/project/github/onurrozkaan/vue-cryptobar/master.svg?label=.circleci"/>
  <img src="https://img.shields.io/travis/com/onurrozkaan/vue-cryptobar/master.svg?label=.travis"/>
  <img src="https://img.shields.io/github/last-commit/onurrozkaan/vue-cryptobar.svg?label=last%20update&style=flat"/>
  <img src="https://img.shields.io/npm/v/vue-cryptobar.svg?colorB=red&label=build%20version&style=flat"/>
  <img src="https://img.shields.io/github/languages/top/onurrozkaan/vue-cryptobar.svg?colorB=red&label=vue%20ratio&style=flat"/>
  <img src="https://img.shields.io/npm/dt/vue-cryptobar.svg?color=red"/>
  <img src="https://img.shields.io/github/repo-size/onurrozkaan/vue-cryptobar.svg?colorB=black&label=repo%20size&style=flat"/>
  <img src="https://img.shields.io/npm/l/vue-cryptobar.svg?colorB=black&label=LICENSE&style=flat"/>
</p>

<br>

# About vue-cryptobar

<p align="center">
<img src="https://user-images.githubusercontent.com/39852038/49700589-b8262d80-fbf1-11e8-9724-e77e9a0cf685.gif"/>
</p>

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
##### Default coins are Bitcoin, Ethereum, Maker and default currencies are USD and TRY. To make cryptobar with specific values you have to go on options like: 

```sh
<cryptobar
    :coin-name-config="['BTC','ETH','MKR']" 
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
     bar-radius="4px"
     bar-color="rgb(192, 192, 192)"
     positive-price-color="#253121"
     negative-price-color="orange"
     currency-symbol-color="#212121"
     name-and-currency-color="rgb(255, 255, 255)"
     trade-market-color="yellow"
  />
```

##### With next patches vue-cryptobar will be much more adjustable, flexible and responsive for different size screens.
##### Feedback to onurozkan.dev@outlook.com via mail to make this tool greater :+1:
