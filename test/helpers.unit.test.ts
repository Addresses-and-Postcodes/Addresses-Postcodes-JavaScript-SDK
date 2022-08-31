import { describe } from 'mocha';
import { expect } from 'chai';

import { Helpers } from '../src/Helpers/Helpers';

describe('helpers.unit.test.ts', () => {
    // Instance of HttpClient.
    let helpers;

    /**
     * CREATE new instance of Helpers.
     */
    beforeEach(() => {
        helpers = new Helpers()
    });

    /**
     * Test if it's an instance of Helpers.
     */
    it('Is instance of HttpClient.', () => {
        expect(helpers).to.have.instanceof(Helpers)
    });
})