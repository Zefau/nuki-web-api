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
module.exports.getBrand = function(brandId)
{
	let self = this;
	return this
		._req('opener/brand' + (brandId ? '/' + brandId : ''))
		.then(function(brands)
		{
			if ((!brandId && !Array.isArray(brands)) || (brandId && typeof brands != 'object'))
				throw new Error('Did not receive brands!');
			
			return brands;
		});
};
