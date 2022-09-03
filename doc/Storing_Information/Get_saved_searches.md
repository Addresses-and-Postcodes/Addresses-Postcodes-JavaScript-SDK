## Get Saved Searches

[Back to the doc](../README.md)

#### Description

Get a list of all your saves searches - By polygon or radius.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.storingInformation().getSavedSearches().then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.storingInformation().getSavedSearches().then(response => { console.log(response) })
```