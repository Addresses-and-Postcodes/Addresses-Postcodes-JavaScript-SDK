## Get sector count & path


[Back to the doc](../README.md)

#### Description

Retrieve a count of properties within a polygon and the polygon coordinates.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.sectors().getSectorCountAndPath('BS15 4').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.sectors().getSectorCountAndPath('BS15 4').then(response => { console.log(response) })
```