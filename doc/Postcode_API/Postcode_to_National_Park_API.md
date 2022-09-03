## Postcode to National Park API

[Back to the doc](../README.md)

#### Description

National parks are designed to conserve the natural beauty and cultural heritage of areas of outstanding landscape value, and to promote public understanding and enjoyment of these areas.

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToNationalPark('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToNationalPark('ab101ab').then(response => { console.log(response) })
```