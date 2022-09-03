## Delete a Search

[Back to the doc](../README.md)

#### Description

Remove / hide a Polygon or Radius search to your account.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.storingInformation().deleteSearch('SEARCH_ID').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.storingInformation().deleteSearch('SEARCH_ID').then(response => { console.log(response) })
```