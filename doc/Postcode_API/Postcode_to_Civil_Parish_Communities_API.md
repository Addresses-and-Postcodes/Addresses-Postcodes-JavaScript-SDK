## Postcode to Civil Parish (England), Communities (Wales) API

[Back to the doc](../README.md)

#### Description

endpoint #6

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToCivilParishCommunitiesAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToCivilParishCommunitiesAPI('ab101ab').then(response => { console.log(response) })
```