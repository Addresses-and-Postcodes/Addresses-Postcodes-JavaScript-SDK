## Postcode to European Electoral Regions (EER) API

[Back to the doc](../README.md)

#### Description

EERs are as defined in the European Parliamentary Elections Bill (Bill 65, 1997) to amend the European Parliamentary Elections Act 1978 so as to alter the method used in Great Britain for electing Members of the European Parliament.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToEuropeanElectoralRegionsAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToEuropeanElectoralRegionsAPI('ab101ab').then(response => { console.log(response) })
```