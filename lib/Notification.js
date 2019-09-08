'use strict';

/**
 * This function returns the notifications of all smartlocks.
 *
 * @memberof Nuki
 * @description Get a list of notifications for all of your smartlocks
 * @param {Integer}			[notificationId]			The notification id
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Notification
 */
module.exports.getNotification = function(notificationId)
{
	let self = this;
	return this
		._req('notification' + (notificationId ? '/' + notificationId : ''))
		.then(function(notifications)
		{
			if ((!notificationId && !Array.isArray(notifications)) || (notificationId && typeof notifications != 'object'))
				throw new Error('Did not receive notifications!');
			
			return notifications;
		});
};
