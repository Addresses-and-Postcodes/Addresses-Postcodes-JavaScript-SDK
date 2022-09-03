## Properties count by radius

[Back to the doc](../README.md)

#### Description

Retrieve a count of properties within radius.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.addresses().propertiesCountByRadius('1.234', '-2.394', '45').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.addresses().propertiesCountByRadius('1.234', '-2.394', '45').then(response => { console.log(response) })
```