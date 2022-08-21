## List of endpoints: ✅ (Working) | ❌ (Not working) => JavaScript SDK

### Boundaries
- Get area boundary path ✅
- Get sector boundary path ✅

### Sectors
- Get sectors count & path ❌ => {exception: "ErrorException", file: app\Traits\ElasticSearchTrait.php", line: 127, message: "Array to string conversion"}

### Postcodes
- Postcode count by Polygon ✅

- Postcode list by polygon ❌ => {exception: "ErrorException", file: app\Http\Controllers\Api\PostcodeController.php", line: 137, message: "count(): Parameter must be an array or an object that implements Countable"}

- Get the geographical path of a postcode ✅

### Addresses
- Search for property ✅
- Properties list by Postcode ✅

- Properties count by Polygon ❌ => {exception: "Elasticsearch\\Common\\Exceptions\\BadRequest400Exception", file: vendor\\elasticsearch\\elasticsearch\\src\\Elasticsearch\\Connections\\Connection.php, line: 675, message: "{\"error\":{\"root_cause\":[{\"type\":\"query_shard_exception\"
}

- Properties count by radius ❌ => {exception: "Elasticsearch\\Common\\Exceptions\\BadRequest400Exception", file: vendor\\elasticsearch\\elasticsearch\\src\\Elasticsearch\\Connections\\Connection.php, line: 675, message: "{\"error\":{\"root_cause\":[{\"type\":\"parsing_exception\"
}

- Properties count by line polygon ❌ => 404 Error Route Not Found

- Properties count by postcode ✅

### Postcode Information
- Postcode GEO Information ✅

### Storing Information
- Get Saved Searches ❌
- Save a Search ❌
- Delete a Search ❌

### Postcode API
- Postcodes Current and Terminated API ✅
- Postcode to County API ❌
- Postcode to Local Authority District ✅
- Postcode to London Borough API ❌
- Postcode to Electoral Ward / Division API ❌
- Postcode to Civil Parish (England), Communities (Wales) API ❌
- Postcode to National Grid Reference API ✅
- Postcode to Former Strategic Health Authority ✅
- Postcode to NHS England Regions (NHS ER) API ❌
- Postcode to UK Country Names & Codes API ✅
- Postcode to Regions (RGN) (formerly Government Office Regions GOR) API ✅
- Postcode to Standard Statistical Regions API ✅
- Postcode to Westminster Parliamentary Constituency API ✅
- Postcode to European Electoral Regions (EER) API ✅
- Postcode to Local Learning and Skills Council ✅
- Postcode to Travel to Work Areas (TTWA) API ✅
- Postcode to Primary Care Trusts ✅
- Postcode to Nomenclature of Units for Territorial Statistics (NUTS) ❌
- Postcode to 2005 Statistical Wards API ✅
- Postcode to 2001 National UK Census Output Area Classification names API ✅
- Postcode to 2001 Census Area Statistics (CAS) Wards API ✅
- Postcode to National Park API ✅