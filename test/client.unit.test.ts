import { describe } from 'mocha';
import { expect } from 'chai';

import {Client} from '../src/Client'
import { Sectors } from '../src/Endpoints/Sectors';
import { Postcodes } from '../src/Endpoints/Postcodes';
import { Addresses } from '../src/Endpoints/Addresses';
import { Boundaries } from '../src/Endpoints/Boundaries';
import { PostcodeInformation } from '../src/Endpoints/PostcodeInformation';
import { PostcodeAPI } from '../src/Endpoints/PostcodeAPI';
import { StoringInformation } from '../src/Endpoints/StoringInformation';

/**
 * Tests Unit For Client.ts
 */
describe('client.unit.test.ts', () => {
  let client; const apiKey = "1616589158-361070052-462388701-1635564164"

  /**
   * CREATE new instance of Client.
   */
  beforeEach(() => {
    client = new Client(apiKey)
  });

  /**
   * Test if it's instance of Client.
   */
  it('Is instance of client.', () => {
    expect(client).to.have.instanceof(Client)
  });

  /**
   * Test if api key is correct.
   */
  it('API Key', () => {
    expect(client.apiKey).to.equal(apiKey)
  });

  /**
   * Test the HTTP request with the GET method.
   */
  it('HTTP Request|GET Method', async () => {
    await client.get('/api/v3/areas/AB/path').then(response => {
      expect(Object.keys(response).length).to.not.equal(0)
      expect(response).to.have.property('status')
      expect(response.status).to.equal(true)
    });
  });

  /**
   * Test the HTTP request with the POST method.
   */
  it('HTTP Request|POST Method', async () => {
    const data = {name: 'my-first-search', params: {endpoint: '/api/v3/properties/total/by/path'}}
    await client.post('/v3/postcodes/door-drop', data).then(response => {
      expect(Object.keys(response).length).to.not.equal(0)
      expect(response).to.have.property('status')
      expect(response.status).to.equal(true)
    });
  })

  /**
   * Test the HTTP request with the DELETE method.
   */
  it('HTTP Request|DELETE Method', async () => {
    await client.delete('/v3/postcodes/door-drop', {id: '1'}).then(response => {
      expect(Object.keys(response).length).to.not.equal(0)
      expect(response).to.have.property('status')
      expect(response.status).to.equal(true)
    })
  })

  /**
   * Test Boundaries instance from Client class.
   */
  it('boundaries():', () => {
    expect(client.boundaries()).to.have.instanceof(Boundaries)
  })
  
  /**
   * Test Sectors instance from Client class.
   */
  it('sectors():', () => {
    expect(client.sectors()).to.have.instanceof(Sectors)
  })

  /**
   * Test Postcodes instance from Client class.
   */
  it('postcodes():', () => {
    expect(client.postcodes()).to.have.instanceof(Postcodes)
  })
  
  /**
   * Test Addresses instance from Client class.
   */
  it('addresses():', () => {
    expect(client.addresses()).to.have.instanceof(Addresses)
  })
  
  /**
   * Test PostcodeInformation instance from Client class.
   */
  it('postcodeInformation():', () => {
    expect(client.postcodeInformation()).to.have.instanceof(PostcodeInformation)
  })
  
  /**
   * Test StoringInformation instance from Client class.
   */
  it('storingInformation():', () => {
    expect(client.storingInformation()).to.have.instanceof(StoringInformation)
  })
  
  /**
   * Test PostcodeAPI instance from Client class.
   */
  it('postcodeAPI():', () => {
    expect(client.postcodeAPI()).to.have.instanceof(PostcodeAPI)
  })
});