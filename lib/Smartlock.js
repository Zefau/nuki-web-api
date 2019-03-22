'use strict';


/**
 * This function returns a list of locks.
 *
 * @memberof Nuki
 * @description Get a list of smartlocks
 * @param {Object}			[parameters]		Parameters to use
 * @param {Integer}			parameters.authId	Filter for authId
 * @param {Integer}			parameters.type		Filter for type
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Smartlock/get
 */
module.exports.getSmartlocks = function(parameters)
{
	let self = this;
	return this
		._req('smartlock', parameters)
		.then(function(locks)
		{
			if (!Array.isArray(locks))
				throw new Error('Did not receive a list of smartlocks!');
			
			return locks;
		});
};

/**
 * This function returns a specific lock.
 *
 * @memberof Nuki
 * @description Get a smartlock
 * @param {Integer}			smartlockId			The smartlock id
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Smartlock/get_0
 */
module.exports.getSmartlock = function(smartlockId)
{
	let self = this;
	return this
		._req('smartlock/' + smartlockId)
		.then(function(lock)
		{
			if (typeof lock != 'object')
				throw new Error('Did not receive the requested smartlock!');
			
			return lock;
		});
};
