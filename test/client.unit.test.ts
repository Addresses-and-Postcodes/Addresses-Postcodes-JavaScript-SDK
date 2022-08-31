import { describe } from 'mocha';
import { expect, assert } from 'chai';

import {Client} from '../src/Client'

describe('Client', () => {
  let client; const apiKey = "1616589158-361070052-462388701-1635564164"

  beforeEach(() => {
    client = new Client(apiKey)
  });

  it('Check Insta nce', () => {
    expect(client).to.have.instanceof(Client)
  });

  it('Check API Key', () => {
    expect(client.apiKey).to.equal(apiKey)
  });

  it('HTTP Request|GET Method', () => {
    client.get('/api/v3/areas/AB/path').then(response => {
      expect(response).to.deep.include({status: false})
      //expect(response.status).to.equal(false)
    })
  });
});