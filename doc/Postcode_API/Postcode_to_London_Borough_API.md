## Postcode to London Borough API

[Back to the doc](../README.md)

#### Description

There are 33 boroughs in London (Includes the City of London which is officially a separate entity despite being located in the centre of London). We’ve reversed engineered ONS data to identify the postcodes that represent each borough.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToLondonBoroughAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToLondonBoroughAPI('ab101ab').then(response => { console.log(response) })
```