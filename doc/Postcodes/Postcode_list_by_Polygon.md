## Postcode list by polygon


[Back to the doc](../README.md)

#### Description

Retrieve a list of postcodes within a polygon.

#### Browser:

```html
<script src="/dist/addresses-postcodes-sdk.min.js"></script>
<script>
    const path = [
        {lat: 51.478302, lng: -2.498105},
        {lat: 51.478484, lng: -2.496351},
        {lat: 51.478108, lng: -2.496052},
        {lat: 1.478132, lng: -2.494838},
        {lat: 51.478289, lng: -2.494202},
        {lat: 51.478242, lng: -2.493962},
        {lat: 51.477769, lng: -2.493253},
        {lat: 51.477761, lng: -2.492371},
        {lat: 51.477173, lng: -2.491592},
        {lat: 51.477134, lng: -2.491379},
        {lat: 51.477923, lng: -2.488219},
        {lat: 51.477855, lng: -2.487678},
        {lat: 51.477899, lng: -2.48659},
        {lat: 51.477827, lng: -2.486426},
        {lat: 51.476326, lng: -2.485248},
        {lat: 51.476193, lng: -2.485034},
        {lat: 51.475105, lng: -2.485288},
    ];
    let client = new AddressesPostcodesSDK.Client('API_KEY')
    client.postcodes().postcodeListByPolygon(path).then(response => { console.log(response) })
</script>
```

#### Node.js:

```js
const { Client } = require('addresses-postcodes-javascript-sdk')

const path = [
    {lat: 51.478302, lng: -2.498105},
    {lat: 51.478484, lng: -2.496351},
    {lat: 51.478108, lng: -2.496052},
    {lat: 1.478132, lng: -2.494838},
    {lat: 51.478289, lng: -2.494202},
    {lat: 51.478242, lng: -2.493962},
    {lat: 51.477769, lng: -2.493253},
    {lat: 51.477761, lng: -2.492371},
    {lat: 51.477173, lng: -2.491592},
    {lat: 51.477134, lng: -2.491379},
    {lat: 51.477923, lng: -2.488219},
    {lat: 51.477855, lng: -2.487678},
    {lat: 51.477899, lng: -2.48659},
    {lat: 51.477827, lng: -2.486426},
    {lat: 51.476326, lng: -2.485248},
    {lat: 51.476193, lng: -2.485034},
    {lat: 51.475105, lng: -2.485288},
];
let client = new Client('API_KEY')
client.postcodes().postcodeListByPolygon(path).then(response => { console.log(response) })
```