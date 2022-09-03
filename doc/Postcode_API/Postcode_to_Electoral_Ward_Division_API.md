## Postcode to Electoral Ward / Division API

[Back to the doc](../README.md)

#### Description

Postcode to Electoral Ward / Division API

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToElectoralWardDivisionAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToElectoralWardDivisionAPI('ab101ab').then(response => { console.log(response) })
```