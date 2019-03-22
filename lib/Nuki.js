'use strict';

const _request = require('request-promise');


/**
 * The constructor for a connection to the Nuki Web API.
 *
 * @class Nuki Web
 * @author Zefau <zefau@mailbox.rg>
 * @license MIT
 * @version 2.0.0
 *
 * @param {String}			token				Token for authentication
 * @param {Object}			[options]			Further options
 * @param {String}			[options.url]		Override default API url (which is https://api.nuki.io)
 * @returns {Nuki}
 *
 * @constructor
 * @description Based on Nuki Web API v.1.1.1 as of 30.08.2018
 * @see https://developer.nuki.io/page/nuki-web-api-111/3/
 *
 */
let Nuki = function Nuki(token, options)
{
	if (!(this instanceof Nuki))
		return new Nuki(token);
	
	if (!token)
		throw new Error('API Token required! Please check the arguments!');
	
	this.token = token;
	
	options = options || {}
	this.url = options.url || 'https://api.nuki.io';
};


/**
 * This function requests an action.
 *
 * @memberof Nuki
 * @param {String|Array}	paths				Paths to attach to URL
 * @param {Object}			[parameters={}]		Parameters to attach to URL ({key: value} turns to ?key=value respectively &key=value)
 * @param {String}			[method=GET]		Method to use [GET, POST, PUT, DELETE]
 * @param {String}			[body={}]			Body data to send
 * @param {String}			[options={}]		Additional options to use
 * @returns {Promise<Object>}
 */
Nuki.prototype._req = function _req(paths, parameters, method, body, options)
{
	paths = (paths ? ('/' + (typeof paths === 'string' ? paths : paths.join('/'))) : '');
	
	let params = Object.keys(parameters || {});
	params = params.length ? '?' + params.map(function(key) {return key + '=' + parameters[key]}).join('&') : '';
	
	return _request(Object.assign(options || {},
	{
		url: this.url + paths + params,
		method: method || 'GET',
		headers: {'Authorization': 'Bearer ' + this.token},
		body: body || {},
		json: true
	}));
};




Nuki.prototype = Object.assign(
	{},
	Nuki.prototype,
	require('./Account'),
	require('./Smartlock'),
	require('./SmartlockAuth'),
	require('./SmartlockLog'),
	require('./Subscription')
);

module.exports = Nuki;
