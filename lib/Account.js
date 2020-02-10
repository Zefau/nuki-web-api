'use strict';

/**
 * This function returns an account.
 *
 * @memberof Nuki
 * @description Get an account
 * @param void
 * @returns {Promise}
 * @see https://api.nuki.io/#!/Account/get
 */
module.exports.getAccount = function() {

  return this
    ._req('account')
    .then(function(account) {
      if (typeof account != 'object') {
        throw new Error('Did not receive account!');
      }

      return account;
    });
};
