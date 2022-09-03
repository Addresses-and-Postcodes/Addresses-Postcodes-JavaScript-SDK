## Postcode to Regions (RGN) (formerly Government Office Regions GOR) API

[Back to the doc](../README.md)

#### Description

The nine GORs were abolished on 1 April 2011 and are now known as "regions" for statistical purposes. They were the primary statistical subdivisions of England and also the areas in which the Government Offices for the Regions fulfilled their role. Each region covered a number of local authorities. The region code for each postcode. Pseudo codes are included for Wales, Scotland, Northern Ireland, Channel Island and Isle of Man. The field will be blank for postcodes in England with no grid reference.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToRegionsAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToRegionsAPI('ab101ab').then(response => { console.log(response) })
```