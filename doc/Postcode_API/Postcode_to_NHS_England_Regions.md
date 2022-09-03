## Postcode to NHS England Regions (NHS ER) API

[Back to the doc](../README.md)

#### Description

NHSERs (formerly NHS Commissioning Regions - NHS CR) are sub-divisions of the NHS commissioning board. There are four NHS ERs in England and they were renamed from NHS CRs in May 2017. The NHS CRs were formed on 1 April 2013, replacing pan SHAs, and are responsible for providing clinical and professional leadership at sub-national level. They are also responsible for the co-ordination of planning, operational management and emergency preparedness at sub-national level and undertaking direct commissioning functions and processes.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToNHSEnglandRegionsAPI('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToNHSEnglandRegionsAPI('ab101ab').then(response => { console.log(response) })
```