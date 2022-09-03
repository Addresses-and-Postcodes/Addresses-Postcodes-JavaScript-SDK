## Postcode to Primary Care Trusts

[Back to the doc](../README.md)

#### Description

Postcodes on the ONSPD have been assigned PCO codes (England), LHB codes (Wales), CHP codes (Scotland), LCG codes (NI) or Primary Healthcare Directorate code (Isle of Man). Postcodes in the Channel Islands (for which there are no equivalent areas) have been assigned a pseudo code.

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToPrimaryCareTrusts('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToPrimaryCareTrusts('ab101ab').then(response => { console.log(response) })
```