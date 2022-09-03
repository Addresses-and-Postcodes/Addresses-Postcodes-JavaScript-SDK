## Get the geographical path of a postcode.


[Back to the doc](../README.md)

#### Description

Retrieve the geographical path of a postcode.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodes().postcodeGetGeographicalPath('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodes().postcodeGetGeographicalPath('ab101ab').then(response => { console.log(response) })
```