## Postcode to Nomenclature of Units for Territorial Statistics (NUTS)

[Back to the doc](../README.md)

#### Description

NUTS is a hierarchical classification of spatial units that provides a breakdown of the European Union’s territory for producing regional statistics that are comparable across the Union.

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodeAPI().postcodeToNomenclatureofUnitsforTerritorialStatistics('ab101ab').then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

let client = new Client('API_KEY')
client.postcodeAPI().postcodeToNomenclatureofUnitsforTerritorialStatistics('ab101ab').then(response => { console.log(response) })
```