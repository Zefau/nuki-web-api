'use strict';

/**
 * This function returns the logs of all smartlocks.
 *
 * @memberof Nuki
 * @description Get a list of smartlock logs for all of your smartlocks
 * @param {Integer}			[subscriptionId]			The smartlock id
 * @returns {Promise}
 * @see https://api.nuki.io/#!/SmartlockLog/get
 */
module.exports.getSubscription = function(subscriptionId)
{
	let self = this;
	return this
		._req('subscription' + (subscriptionId ? '/' + subscriptionId : ''))
		.then(function(subscriptions)
		{
			if ((!subscriptionId && !Array.isArray(subscriptions)) || (subscriptionId && typeof subscriptions != 'object'))
				throw new Error('Did not receive subscriptions!');
			
			return subscriptions;
		});
};
