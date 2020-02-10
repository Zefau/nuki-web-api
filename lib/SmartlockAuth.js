'use strict';

/**
 * This function returns a list of authorized users of the smartlocks.
 *
 * @memberof Nuki
 * @description Get a list of smartlock authorizations for your smartlocks
 * @param {Object}			[parameters]					Parameters to use
 * @param {Integer}			parameters.accountUserId		Filter for account users
 * @returns {Promise}
 * @see https://api.nuki.io/#!/SmartlockAuth/get
 */
module.exports.getSmartlockAuths = function(parameters) {

  return this
    ._req('smartlock/auth', parameters)
    .then(function(users) {
      if (!Array.isArray(users)) {
        throw new Error('Did not receive a list of authorized users!');
      }

      return users;
    });
};


/**
 * This function returns a list of authorized users of the smartlocks.
 *
 * @memberof Nuki
 * @description Synonym for getSmartlockAuths()
 * @param {Object}			[parameters]					Parameters to use
 * @param {Integer}			parameters.accountUserId		Filter for account users
 * @returns {Promise}
 * @see getSmartlockAuths()
 */
module.exports.getSmartlockUsers = function(parameters) {
  return this.getSmartlockAuths(parameters);
};

/**
 * This function returns a list of authorized users for a specific smartlock. Optionally a specific user.
 *
 * @memberof Nuki
 * @description Get a list of smartlock authorizations
 * @param {Integer}			smartlockId			The smartlock id
 * @param {String}			[userId]			The smartlock auth unique id
 * @returns {Promise}
 * @see https://api.nuki.io/#!/SmartlockAuth/get_0
 */
module.exports.getSmartlockAuth = function(smartlockId, userId) {

  return this
    ._req('smartlock/' + smartlockId + '/auth' + (userId ? '/' + userId : ''))
    .then(function(users) {
      if ((!userId && !Array.isArray(users)) || (userId && typeof users != 'object')) {
        throw new Error('Did not receive the requested smartlock!');
      }

      return users;
    });
};
