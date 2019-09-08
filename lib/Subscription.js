'use strict';

/**
 * This function returns the subscriptions of all smartlocks.
 *
 * @memberof Nuki
 * @description Get a list of subscriptions for all of your smartlocks
 * @param {Integer}			[subscriptionId]			The subscription id
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Subscription
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
