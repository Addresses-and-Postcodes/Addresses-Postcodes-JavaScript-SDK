## Postcode to 2005 Statistical Wards API

[Back to the doc](../README.md)

#### Description

"Statistical" wards were those electoral wards promulgated in Statutory Instruments by the end of a calendar year and implemented for statistical purposes on 1 April in the following year, irrespective of the year of statutory operation.


```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeTo2005StatisticalWardsAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeTo2005StatisticalWardsAPI('ab101ab').then(response => { console.log(response) })
```