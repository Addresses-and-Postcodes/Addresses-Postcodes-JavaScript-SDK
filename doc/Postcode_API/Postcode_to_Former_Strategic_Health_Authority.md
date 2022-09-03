## Postcode to Former Strategic Health Authority

[Back to the doc](../README.md)

#### Description

The health area code for the postcode. SHAs were abolished in England in 2013 but the codes remain as a ‘frozen’ geography. The field will otherwise be blank for postcodes with no grid reference. 36 areas across the UK.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToFormerStrategicHealthAuthority('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToFormerStrategicHealthAuthority('ab101ab').then(response => { console.log(response) })
```