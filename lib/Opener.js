'use strict';

/**
 * This function returns the intercom brands of all openers.
 *
 * @memberof Nuki
 * @description Get a list of ntercom brands for all of your openers
 * @param {Integer}			[brandId]			The brand id
 * @returns {Promise}
 * @see https://api.nuki.io/#!/OpenerIntercomBrand
 */
module.exports.getBrand = function(brandId) {

  return this
    ._req('opener/brand' + (brandId ? '/' + brandId : ''))
    .then(function(brands) {
      if ((!brandId && !Array.isArray(brands)) || (brandId && typeof brands != 'object')) {
        throw new Error('Did not receive brands!');
      }
			
      return brands;
    });
};

/**
 * This function returns the intercom models of all openers.
 *
 * @memberof Nuki
 * @description Get a list of intercom models for all of your openers
 * @param {Integer}			[intercomId]				The intercom id
 * @param {Object}			options						Additional options
 * @param {Integer}			options.brandId				Filter for brandId. Required if 'recentlyChanged' is not set
 * @param {Boolean}			[options.ignoreVerified]	If true, return intercoms ignoring their verified value
 * @param {Boolean}			[options.recentlyChanged]	If true, return all intercoms which recently were updated
 * @returns {Promise}
 * @see https://api.nuki.io/#!/OpenerIntercomModel
 */
module.exports.getModel = function(intercomId, options) {
  // get params
  options = !Number.isInteger(intercomId) ? intercomId : (options || {});
  let params = [];
  for (let key in options) {
    params.push(key + '=' + options[key]);
  }

  // request
  return this
    ._req('opener/intercom' + (Number.isInteger(intercomId) ? '/' + intercomId : '') + '?1&' + params.join('&'))
    .then(models => {
      if ((!intercomId && !Array.isArray(models)) || (intercomId && typeof models != 'object')) {
        throw new Error('Did not receive models!');
      }

      return models;
    });
};
