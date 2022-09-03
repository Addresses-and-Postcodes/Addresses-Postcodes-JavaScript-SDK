## Postcodes Current and Terminated API

[Back to the doc](../README.md)

#### Description

Contains all live and terminated (closed) postcodes within the UK.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodesCurrentAndTerminatedAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodesCurrentAndTerminatedAPI('ab101ab').then(response => { console.log(response) })
```