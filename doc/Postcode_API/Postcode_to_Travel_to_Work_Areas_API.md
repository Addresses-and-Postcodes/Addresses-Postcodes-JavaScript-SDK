## Postcode to Travel to Work Areas (TTWA) API

[Back to the doc](../README.md)

#### Description

TTWAs are used in labour market analysis and reflect reasonably self-contained zones in which the bulk of the resident population also work.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToTravelToWorkAreasAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToTravelToWorkAreasAPI('ab101ab').then(response => { console.log(response) })
```