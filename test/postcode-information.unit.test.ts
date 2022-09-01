require('dotenv').config()

import { describe } from 'mocha';
import { expect } from 'chai';

import { Client } from '../src/Client';

describe('postcode-information.unit.test.ts', () => {
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
     * Test postcode geo information.
     */
    it('Postcode GEO Information', async () => {
        await client.postcodeInformation().postcodeGEOInformation('ab101ab').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })
})