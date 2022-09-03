## Postcode to Westminster Parliamentary Constituency API

[Back to the doc](../README.md)

#### Description

England and Wales - Parliamentary constituencies relate to those defined by the Parliamentary Constituencies (England) Order 2007, the Parliamentary Constituencies (England) (Amendment) Order 2008 and the Parliamentary Constituencies (Wales) (Amendment) Order 2008, and which came into effect at the May 2010 General Election.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToWestminsterParliamentaryConstituencyAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToWestminsterParliamentaryConstituencyAPI('ab101ab').then(response => { console.log(response) })
```