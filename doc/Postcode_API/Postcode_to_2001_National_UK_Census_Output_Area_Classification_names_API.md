## Postcode to 2001 National UK Census Output Area Classification names API.

[Back to the doc](../README.md)

#### Description

The 2001 Census OAs were built from unit postcodes and constrained to 2003 ‘statistical’ wards, and they form the building bricks for defining higher level geographies. Pseudo codes are included for Channel Islands and Isle of Man. The field will otherwise be blank for postcodes with no grid reference. Includes OAC01, Supergroup, Group and Subgroup.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeTo2001NationalUKCensusOutputAreaClassificationNamesAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeTo2001NationalUKCensusOutputAreaClassificationNamesAPI('ab101ab').then(response => { console.log(response) })
```