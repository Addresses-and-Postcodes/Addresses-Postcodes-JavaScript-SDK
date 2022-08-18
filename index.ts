// defined by webpack plugin
declare var BUILT: any;

if (typeof window !== 'undefined' && typeof BUILT === 'undefined')
    throw new Error('It looks like you are using the Nodejs version of Addresses Postcodes Javascript SDK.')

/**
 * -------------------------
 * EXPORT
 * -------------------------
 */
export * from './src/Client'
