# Addresses Postcodes JAVASCRIPT SDK

<br>

<p align="center">
  <img src="https://addressesandpostcodes.co.uk/assets/img/ap-logo-new.svg" width="45%"/>
</p>

<br>

![GitHub](https://img.shields.io/github/license/Addresses-and-Postcodes/Addresses-Postcodes-PHP-SDK)

## About

This is the official Javascript SDK for the Addresses and Postcodes API. It provides a way to list coordinates to produce a polygon and such.

## Getting started

### Installation

This SDK can be used either in NodeJS or in a browser.

#### Node.js 

```bash
$ npm install addresses-postcodes-javascript-sdk
```

or if you use yarn

```bash
$ yarn add addresses-postcodes-javascript-sdk
```

#### Browser

To run the SDK in the browser, you have to build it yourself by cloning this repository and running

```bash
$ npm install
$ npm run build:clean
````

or if you use yarn

```bash
$ yarn install
$ yarn build:clean
````

A `dist` directory will be created, containing a browser version of this SDK.

```html
<!-- Unminified -->
<script type="text/javascript" src="dist/addresses-postcodes-sdk.js"></script>
<!-- Minified -->
<script type="text/javascript" src="dist/addresses-postcodes-sdk.min.js"></script>
```

## Basic usage of `Addresses-Postcodes-JavaScript-SDK`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript SDK | Get area boundary path</title>
</head>
<body>
    <script src="dist/addresses-postcodes-sdk.min.js"></script>
    <script>
        let client = new AddressesPostcodesSDK.Client('API_KEY')
        client.boundaries().getAreaBoundaryPath('AB').then(response => { console.log(response) })
    </script>
</body>
</html>
```
## Samples

The [`samples`](samples/) folder contains examples for each api endpoint. Run only the HTML file, then look in the console part by pressing F12 to see the response return.

## Tests

> **WARNING**: Before running the tests, please add your API key in the `.env` file in project root. If the file does not exist, please create it.

```dosini
API_KEY="YOUR_API_KEY_HERE"
```

To run the tests, go to the root folder of the project in terminal and run the following command:

```bash
$ npm run coverage
```

or if you use yarn

```bash
$ yarn coverage
```

## Documentation

See the [`doc`](doc/) directory for more detailed documentation.

## License

Licensed under the MIT license, see [`LICENSE`](LICENSE.md)