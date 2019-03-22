'use strict';

/**
 * This function returns the logs of all smartlocks.
 *
 * @memberof Nuki
 * @description Get a list of smartlock logs for all of your smartlocks
 * @param {Integer}			[smartlockId]					The smartlock id
 * @param {Object}			[parameters]					Parameters to use
 * @param {Integer}			parameters.accountUserId		Filter for account users
 * @param {String}			parameters.fromDate				Filter for start date (RFC3339)
 * @param {String}			parameters.toDate				Filter for end date (RFC3339)
 * @param {Integer}			parameters.action				Filter for action
 * @param {Integer}			parameters.id					Filter for older logs
 * @param {Integer}			parameters.limit				Filter for amount of logs
 * @returns {Promise}
 * @see https://api.nuki.io/#!/SmartlockLog/get
 */
module.exports.getSmartlockLogs = function(smartlockId, parameters)
{
	if (typeof smartlockId == 'object')
	{
		parameters = smartlockId;
		smartlockId = undefined;
	}
	
	let self = this;
	return this
		._req(smartlockId ? 'smartlock/' + smartlockId + '/log' : 'smartlock/log', parameters)
		.then(function(logs)
		{
			if (!Array.isArray(logs))
				throw new Error('Did not receive a list of logs!');
			
			return logs;
		});
};
