## Search for property

[Back to the doc](../README.md)

#### Description

Retrieve a property by building name or number and postcode.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.addresses().searchForProperty('ABERDEEN CITY COUNCIL', 'ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.addresses().searchForProperty('ABERDEEN CITY COUNCIL', 'ab101ab').then(response => { console.log(response) })
```