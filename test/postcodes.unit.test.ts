require('dotenv').config()

import { describe } from 'mocha';
import { expect } from 'chai';

import { Client } from '../src/Client';

describe('postcodes.unit.test.ts', () => {
    /**
     * Client instance and api key.
     */
    let client; const apiKey = process.env.API_KEY !== 'undefined' && process.env.API_KEY ? process.env.API_KEY : ""

    /**
     * array of [lat, lng] values of the polygon.
     */
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

    /**
     * CREATE new instance of Client.
     */
    beforeEach(() => {
        client = new Client(apiKey)
    });

    /**
     * Test postcode count by polygon.
     */
    it('Postcode count by Polygon', async () => {
        await client.postcodes().postcodeCountByPolygon(path).then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test postcode list by polygon.
     */
    it('Postcode list by polygon', async () => {
        await client.postcodes().postcodeListByPolygon(path).then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })

    /**
     * Test get geographical path of a postcode.
     */
    it('Get the geographical path of a postcode', async () => {
        await client.postcodes().getGeographicalPathOfPostcode('ab101ab').then(response => { 
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        })
    })
});