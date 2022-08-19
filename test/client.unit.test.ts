import * as _chai from 'chai';
import { suite, test } from '@testdeck/mocha';
import { mock, instance } from 'ts-mockito';

import { Client } from "../src/Client"

_chai.should();

@suite class ClientUnitTests {

  private client: Client;

  before() {
    this.client = new Client('1616589158-361070052-462388701-1635564164')
  }

  @test 'Is Instance Of Client'() {
    return typeof this.client !== typeof Client
  }
}