## Get sector boundary path

[Back to the doc](../README.md)

#### Description

Retrieve a list of coordinates to produce a polygon around the postcode sector.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.boundaries().getSectorBoundaryPath('BS15 4').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.boundaries().getSectorBoundaryPath('BS15 4').then(response => { console.log(response) })
```
