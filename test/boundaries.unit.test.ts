require('dotenv').config()

import { describe } from 'mocha';
import { expect } from 'chai';

import { Client } from '../src/Client';

describe('boundaries.unit.test.ts', () => {
    let client; const apiKey = process.env.API_KEY !== 'undefined' && process.env.API_KEY ? process.env.API_KEY : ""

    /**
     * CREATE new instance of Client.
     */
    beforeEach(() => {
        client = new Client(apiKey)
    });

    /**
     * Test Get Area Boundary Path Api.
     */
    it('Get area boundary path', async () => {
        await client.boundaries().getAreaBoundaryPath('AB').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        });
    })

    /**
     * Test Get Sector Boundary Path Api.
     */
    it('Get sector boundary path', async () => {
        await client.boundaries().getSectorBoundaryPath('BS15 4').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.be.an('object');
            expect(response).to.have.property('status')
            expect(response.status).to.equal(true)
        });
    })
})