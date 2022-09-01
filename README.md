# Addresses Postcodes JAVASCRIPT SDK

<br>

<p align="center">
  <img src="https://addressesandpostcodes.co.uk/assets/img/ap-logo-new.svg" style="max-width: 400px;"/>
</p>

<br>

![GitHub](https://img.shields.io/github/license/Addresses-and-Postcodes/Addresses-Postcodes-PHP-SDK)

## About

This is the official Javascript SDK for the Addresses and Postcodes API. It provides a way to list coordinates to produce a polygon and such.

## Getting started

### Installation

This SDK can be used either in NodeJS or in a browser.

#### Node.js 

```
npm install addresses-postcodes-javascript-sdk
```

or if you use yarn

```
yarn add addresses-postcodes-javascript-sdk
```

#### Browser

To run the SDK in the browser, you have to build it yourself by cloning this repository and running

```bash
$ npm install
$ npm run build
````

A `build` directory will be created, containing a browser version of this SDK.

```html
<!-- Unminified -->
<script type="text/javascript" src="build/addresses-postcodes-sdk.js"></script>
<!-- Minified -->
<script type="text/javascript" src="build/addresses-postcodes-sdk.min.js"></script>
```

## Documentation

See the [`doc` directory](doc/) for more detailed documentation.

## License

Licensed under the MIT license, see [`LICENSE`](LICENSE.md)