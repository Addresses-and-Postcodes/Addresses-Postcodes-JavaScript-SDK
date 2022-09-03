## Postcode to UK Country Names & Codes API

[Back to the doc](../README.md)

#### Description

The code for the appropriate country (i.e. one of the four constituent countries of the UK or Crown dependencies - the Channel Islands or the Isle of Man) to which each postcode is assigned.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToUKCountryNamesCodesAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToUKCountryNamesCodesAPI('ab101ab').then(response => { console.log(response) })
```