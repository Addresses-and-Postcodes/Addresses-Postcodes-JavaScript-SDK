## Save a Search

[Back to the doc](../README.md)

#### Description

Save a Polygon or Radius search to your account.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    const params = {
        name: "search-1",
        params: {
            endpoint: '/api/v3/properties/total/by/path'
        }
    }
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.storingInformation().saveSearch(params).then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

const params = {
    name: "search-1",
    params: {
        endpoint: '/api/v3/properties/total/by/path'
    }
}
let client = new Client('API_KEY')
client.storingInformation().saveSearch(params).then(response => { console.log(response) })
```