'use strict';

/**
 * This function returns a list of locks.
 *
 * @memberof Nuki
 * @description This function returns a list of locks.
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
 * @description This function returns a specific lock.
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

/**
 * This function updates a smartlock.
 *
 * @memberof Nuki
 * @description This function updates a smartlock.
 * @param {Integer}			smartlockId			The smartlock id
 * @param {Object|Boolean}	update				Values to be updated, if {Object} is provided, either or both the indizes name and favorite have to be supplied, otherwise {Boolean} for a shortcut to favorite
 * @param {String}			[update.name]		The new name of the smartlock
 * @param {Boolean}			[update.favorite]	True if the smartlock is favorite
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Smartlock/post
 */
module.exports.updateSmartlock = function(smartlockId, update)
{
	let set = {}
	if (typeof update == 'object')
		['name', 'favorite'].forEach(function(key) {if (update[key]) set[key] = update[key]});
	
	else if (typeof update == 'boolean' || typeof update == 'number')
		set = {favorite: !!update}
	
	if (!Object.keys(set).length)
		throw new Error('Incorrect parameter supplied to function updateSmartlock()!');
	
	let self = this;
	return this
		._req('smartlock/' + smartlockId, {}, 'POST', set)
		.then(function()
		{
			return true;
		});
};

/**
 * This function applies an action on your smartolock, e.g. lock, unlock or unlatch.
 *
 * @memberof Nuki
 * @description This function applies an action on your smartolock, e.g. lock, unlock or unlatch.
 * @param {Integer}			smartlockId			The smartlock id
 * @param {Object|Integer}	action				Action to be applied, if {Object} is provided, the indizes command and option have to be supplied, otherwise {Integer} for a shortcut of action.command
 * @param {Integer}			action.command		The action - 1: unlock, 2: lock, 3: unlatch, 4: lockngo, 5: lockngo with unlatch
 * @param {Integer}			[action.option]		The option mask: 0: none, 2: force, 4: full lock
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Smartlock/post_0
 */
module.exports.setAction = function(smartlockId, action)
{
	if ((typeof action == 'object' && !action.command) || (typeof action != 'object' && !Number.isInteger(action)))
		throw new Error('Incorrect parameter supplied to function setAction()!');
	
	let self = this;
	return this
		._req('smartlock/' + smartlockId + '/action', {}, 'POST', Number.isInteger(action) ? {action: action} : {action: action.command, option: action.option})
		.then(function()
		{
			return true;
		});
};

/**
 * This function set a new configuration.
 *
 * @memberof Nuki
 * @description This function set a new configuration.
 * @param {Integer}			smartlockId			The smartlock id
 * @param {Object|Integer}	configuration		Updated configuration
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Smartlock/post_0_1_2_3_4_5
 */
module.exports.setConfig = function(smartlockId, configuration)
{
	if (typeof configuration !== 'object')
		throw new Error('Incorrect parameter supplied to function setConfig()!');
	
	let self = this;
	return this
		._req('smartlock/' + smartlockId + '/config', {}, 'POST', configuration);
};

/**
 * This function set a new advanced configuration.
 *
 * @memberof Nuki
 * @description This function set a new advanced configuration.
 * @param {Integer}			smartlockId			The smartlock id
 * @param {Object|Integer}	configuration		Updated advanced configuration
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Smartlock/post_0_1_2_3_4_5
 */
module.exports.setAdvancedConfig = function(smartlockId, configuration)
{
	if (typeof configuration !== 'object')
		throw new Error('Incorrect parameter supplied to function setAdvancedConfig()!');
	
	// get hex ID and extract device type
	let deviceType = smartlockId.toString(16).substr(0, 1)
	
	// send request
	let self = this;
	return this
		._req('smartlock/' + smartlockId + '/advanced/' + (deviceType == 2 ? 'openerconfig' : 'config'), {}, 'POST', configuration);
};
