require('dotenv').config()

import { describe } from 'mocha';
import { expect } from 'chai';

import { Client } from '../src/Client';

describe('addresses.unit.test.ts', () => {
    /**
     * Client instance and api key.
     */
    let client; const apiKey = process.env.API_KEY !== 'undefined' && process.env.API_KEY ? process.env.API_KEY : ""

    /**
     * CREATE new instance of Client.
     */
    beforeEach(() => {
        client = new Client(apiKey)
    });

    /**
     * Test postcodes current and terminated api.
     */
    it('Postcodes Current and Terminated API', async () => {
        await client.postcodeAPI().postcodesCurrentAndTerminatedAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        });
    })

    /**
     * Test postcode to county api.
     */
    it('Postcode to County API', async () => {
        await client.postcodeAPI().postcodeToCountyAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        });
    })

    /**
     * Test postcode to local authority district.
     */
    it('Postcode to Local Authority District', async () => {
        await client.postcodeAPI().postcodeToLocalAuthorityDistrict('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        });
    })

    /**
     * Test postcode to london borough api.
     */
    it('Postcode to London Borough API', async () => {
        await client.postcodeAPI().postcodeToLondonBoroughAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        });
    })

    /**
     * Test postcode to electoral ward / division api.
     */
    it('Postcode to Electoral Ward / Division API', async () => {
        await client.postcodeAPI().postcodeToElectoralWardDivisionAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to civil parish (england), communities (wales) api.
     */
    it('Postcode to Civil Parish (England), Communities (Wales) API', async () => {
        await client.postcodeAPI().postcodeToCivilParishCommunitiesAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to national grid reference api.
     */
    it('Postcode to National Grid Reference API', async () => {
        await client.postcodeAPI().postcodeToNationalGridReferenceAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to former strategic health authority.
     */
    it('Postcode to Former Strategic Health Authority', async () => {
        await client.postcodeAPI().postcodeToFormerStrategicHealthAuthority('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postocode to nhs england regions (nhs er) api.
     */
    it('Postcode to NHS England Regions (NHS ER) API', async () => {
        await client.postcodeAPI().postcodeToNHSEnglandRegionsAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to UK Country Names & Codes API.
     */
    it('Postcode to UK Country Names & Codes API', async () => {
        await client.postcodeAPI().postcodeToUKCountryNamesCodesAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to regions api
     */
    it('Postcode to Regions (RGN) (formerly Government Office Regions GOR) API', async () => {
        await client.postcodeAPI().postcodeToRegionsAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to standard statistical regions api.
     */
    it('Postcode to Standard Statistical Regions API', async () => {
        await client.postcodeAPI().postcodeToStandardStatisticalRegionsAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to westminster parliamentary constituency api.
     */
    it('Postcode to Westminster Parliamentary Constituency API', async () => {
        await client.postcodeAPI().postcodeToWestminsterParliamentaryConstituencyAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to european electoral regions api.
     */
    it('Postcode to European Electoral Regions (EER) API', async () => {
        await client.postcodeAPI().postcodeToEuropeanElectoralRegionsAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to local learning and skills council.
     */
    it('Postcode to Local Learning and Skills Council', async () => {
        await client.postcodeAPI().postcodeToLocalLearningSkillsCouncil('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to travel to work areas api. 
     */
    it('Postcode to Travel to Work Areas (TTWA) API', async () => {
        await client.postcodeAPI().postcodeToTravelToWorkAreasAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to primary care trusts.
     */
    it('Postcode to Primary Care Trusts', async () => {
        await client.postcodeAPI().postcodeToPrimaryCareTrusts('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to nomenclature of units for territorial statistics api.
     */
    it('Postcode to Nomenclature of Units for Territorial Statistics', async () => {
        await client.postcodeAPI().postcodeToNomenclatureOfUnitsForTerritorialStatistics('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to 2005 statistical ward api.
     */
    it('Postcode to 2005 Statistical Wards API', async () => {
        await client.postcodeAPI().postcodeTo2005StatisticalWardsAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to 2001 national uk census output area classification names api.
     */
    it('Postcode to 2001 National UK Census Output Area Classification names API.', async () => {
        await client.postcodeAPI().postcodeTo2001NationalUKCensusOutputAreaClassificationNamesAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to 2001 census area statistics wards api.
     */
    it('Postcode to 2001 Census Area Statistics (CAS) Wards API.', async () => {
        await client.postcodeAPI().postcodeTo2001CensusAreaStatisticsWardsAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode to national park api.
     */
    it('Postcode to National Park API', async () => {
        await client.postcodeAPI().postcodeToNationalParkAPI('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })
})