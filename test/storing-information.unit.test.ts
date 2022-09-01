require('dotenv').config()

import { describe } from 'mocha';
import { expect } from 'chai';

import { Client } from '../src/Client';

describe('storing-information.unit.test.ts', () => {
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
     * Test get saved searches | Api.
     */
    it('Get Saved Searches', async () => {
        await client.storingInformation().getSavedSearches().then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test save a search | Api.
     */
    it('Save a Search', async () => {
        const params = {name: "search-1", params: {endpoint: '/api/v3/properties/total/by/path'}}
        await client.storingInformation().saveSearch(params).then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test delete a search | Api.
     */
    it('Delete a Search', async () => {
        await client.storingInformation().deleteSearch('1').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })
})