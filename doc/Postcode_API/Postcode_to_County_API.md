## Postcode to County API

[Back to the doc](../README.md)

#### Description

The current county to which the postcode has been assigned.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToCountyAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToCountyAPI('ab101ab').then(response => { console.log(response) })
```