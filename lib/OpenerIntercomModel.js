'use strict';

/**
 * This function returns the intercom models of all openers.
 *
 * @memberof Nuki
 * @description Get a list of intercom models for all of your openers
 * @param {Integer}			[intercomId]			The intercom id
 * @returns {Promise}
 * @see https://api.nuki.io/#!/OpenerIntercomModel
 */
module.exports.getModel = function(intercomId)
{
	let self = this;
	return this
		._req('opener/intercom' + (intercomId ? '/' + intercomId : ''))
		.then(function(models)
		{
			if ((!intercomId && !Array.isArray(models)) || (intercomId && typeof models != 'object'))
				throw new Error('Did not receive models!');
			
			return models;
		});
};
