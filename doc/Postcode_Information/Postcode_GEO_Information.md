## Postcode GEO Information

[Back to the doc](../README.md)

#### Description

Returns latitude & longitude centroid for the postcode, County and town.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeInformation().postcodeGEOInformation('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeInformation().postcodeGEOInformation('ab101ab').then(response => { console.log(response) })
```