import { describe } from 'mocha';
import { expect } from 'chai';

import { HttpClient } from '../src/HttpClient';

describe('http-client.unit.test.ts', () => {
    // Instance of HttpClient.
    let httpClient;

    /**
     * CREATE new instance of HttpClient.
     */
    beforeEach(() => {
        httpClient = new HttpClient()
    });

    /**
     * Test if it's instance of HttpClient.
     */
    it('Is instance of HttpClient.', () => {
        expect(httpClient).to.have.instanceof(HttpClient)
    });

    /**
     * Test HTTP Request with GET METHOD.
     */
    it('GET Request Method', async () => {
        await httpClient.get('https://reqres.in/api/users/1').then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.have.property('data')
            expect(Object.keys(response.data).length).to.not.equal(0)
            expect(response.data).to.have.property('id')
        })
    })

    /**
     * Test HTTP Request with POST METHOD.
     */
    it('POST Request Method', async () => {
        await httpClient.post('https://reqres.in/api/users', {"name": "morpheus", "job": "leader"}).then(response => {
            expect(Object.keys(response).length).to.not.equal(0)
            expect(response).to.have.property('name')
            expect(response).to.have.property('job')
            expect(response).to.have.property('id')
            expect(response).to.have.property('createdAt')
            expect(Object.keys(response.name).length).to.not.equal(0)
            expect(Object.keys(response.job).length).to.not.equal(0)
            expect(Object.keys(response.id).length).to.not.equal(0)
            expect(Object.keys(response.createdAt).length).to.not.equal(0)
        })
    })

    /**
     * Test HTTP Request with DELETE METHOD.
     */
    it('DELETE Request Method', async () => {
        await httpClient.delete('https://reqres.in/api/users/2').then(response => {
            expect(response).to.be.a('string');
            expect(response).to.be.equal('');
        })
    })
})