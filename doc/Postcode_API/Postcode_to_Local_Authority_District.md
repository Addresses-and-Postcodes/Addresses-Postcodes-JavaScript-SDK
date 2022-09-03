## Postcode to Local Authority District

[Back to the doc](../README.md)

#### Description

Postcode to Local Authority District.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToLocalAuthorityDistrict('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToLocalAuthorityDistrict('ab101ab').then(response => { console.log(response) })
```