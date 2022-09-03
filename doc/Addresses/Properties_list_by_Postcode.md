## Properties list by Postcode

[Back to the doc](../README.md)

#### Description

Retrieve a list of properties within a postcode.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.addresses().propertiesListByPostcode('AB101AB').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.addresses().propertiesListByPostcode('AB101AB').then(response => { console.log(response) })
```