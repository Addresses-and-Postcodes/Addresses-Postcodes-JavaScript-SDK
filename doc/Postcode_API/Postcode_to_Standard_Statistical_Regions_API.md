## Postcode to Standard Statistical Regions API

[Back to the doc](../README.md)

#### Description

The 8 SSRs were the primary statistical subdivisions of England before the GORs were adopted for this purpose in 1996. They are now rarely used. The SSR code for the associated county or unitary authority to which each postcode is assigned. A pseudo code is included for postcodes not in England. The field will be blank for postcodes in England with no grid reference.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToStandardStatisticalRegionsAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToStandardStatisticalRegionsAPI('ab101ab').then(response => { console.log(response) })
```