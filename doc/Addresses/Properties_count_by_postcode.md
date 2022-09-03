## Properties count by postcode

[Back to the doc](../README.md)

#### Description

Retrieve a count of properties within a postcode.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.addresses().propertiesCountByPostcode('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.addresses().propertiesCountByPostcode('ab101ab').then(response => { console.log(response) })
```