![Logo](nuki-logo.png)
# nuki-web-api
Node.js implementation of the Nuki Web API

[![NPM version](http://img.shields.io/npm/v/nuki-web-api.svg)](https://www.npmjs.com/package/nuki-web-api)
[![Travis CI](https://travis-ci.org/Zefau/nuki-web-api.svg?branch=master)](https://travis-ci.org/Zefau/nuki-web-api)
[![Downloads](https://img.shields.io/npm/dm/nuki-web-api.svg)](https://www.npmjs.com/package/nuki-web-api)

[![NPM](https://nodei.co/npm/nuki-web-api.png?downloads=true)](https://nodei.co/npm/nuki-web-api/)


## Usage

```
let token = "YOUR TOKEN"
let nuki = new Nuki(token)

nuki.getAccount().then(function(res) {
	console.log('getAccount(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getAccount(): ' + e.message)});

nuki.getSmartlocks().then(function(res) {
	console.log('getSmartlocks(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlocks(): ' + e.message)});

nuki.getSmartlock(smartlockId).then(function(res) {
	console.log('getSmartlock(smartlockId): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlock(smartlockId): ' + e.message)});

nuki.getSmartlockAuths().then(function(res) {
	console.log('getSmartlockAuths(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockAuths(): ' + e.message)});

nuki.getSmartlockUsers().then(function(res) {
	console.log('getSmartlockUsers(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockUsers(): ' + e.message)});

nuki.getSmartlockAuth(smartlockId).then(function(res) {
	console.log('getSmartlockAuth(smartlockId): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockAuth(smartlockId): ' + e.message)});

nuki.getSmartlockAuth(smartlockId, userId).then(function(res) {
	console.log('getSmartlockAuth(smartlockId, userId): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartLockAuth(smartlockId, userId): ' + e.message)});

nuki.getSmartlockLogs().then(function(res) {
	console.log('getSmartlockLogs(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockLogs(): ' + e.message)});

nuki.getSmartlockLogs({limit: 3}).then(function(res) {
	console.log('getSmartlockLogs({limit: 3}): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockLogs({limit: 3}): ' + e.message)});

nuki.getSmartlockLogs(smartlockId).then(function(res) {
	console.log('getSmartlockLogs(smartlockId): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockLogs(smartlockId): ' + e.message)});

nuki.getSmartlockLogs(smartlockId, {limit: 3}).then(function(res) {
	console.log('getSmartlockLogs(smartlockId, {limit: 3}): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockLogs(smartlockId, {limit: 3}): ' + e.message)});

nuki.getSubscription().then(function(res) {
	console.log('getSubscription(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSubscription(): ' + e.message)});

nuki.getSubscription(subscriptionId).then(function(res) {
	console.log('getSubscription(subscriptionId): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSubscription(subscriptionId): ' + e.message)});
```


## Example
You may find a full implemented example at [https://github.com/Zefau/ioBroker.nuki2](https://github.com/Zefau/ioBroker.nuki2).


## API documentation
The source code documentation for this Node.js implementation of the Nuki Web API can be found at https://zefau.github.io/nuki-web-api/Nuki.html.

Subsequently a list of supported operations. See https://api.nuki.io/ for the original list of operations.

You may use `_req(paths[, parameters, method, body, options])` function for any of the following operations, e.g. `_req('/account')`. See API documentation for specific usage.


### Account

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| delete | /account | Delete an account | not implemented yet |
| get | /account | Get an account | __`getAccount()` since 2.0.0__ |
| post | /account | Update an account | not implemented yet |
| put | /account | Create an account | not implemented yet |
| delete | /account/otp | Disables one time password for an account | not implemented yet |
| post | /account/otp | Enables one time password for an account | not implemented yet |
| put | /account/otp | Create an one time password secret | not implemented yet |
| post | /account/password/reset | Reset account password | not implemented yet |
| get | /account/sub | Get an list of sub accounts | not implemented yet |
| put | /account/sub | Create an sub account | not implemented yet |
| delete | /account/sub/{accountId} | Delete an sub account | not implemented yet |
| get | /account/sub/{accountId} | Get an sub account | not implemented yet |
| post | /account/sub/{accountId} | Update an sub account | not implemented yet |


### AccountSubscription

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| post | /account/subscription/pay | Starts a payment for an account and returns a payment url | not implemented yet |
| post | /account/subscription/{id}/activate | Activates a previously terminated subscription | not implemented yet |
| post | /account/subscription/{id}/terminate | Terminates a running subscription | not implemented yet |
| get | /app/account/subscription | Get a list of account subscriptions | not implemented yet |


### AccountUser

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /account/user | Get an list of account users | not implemented yet |
| put | /account/user | Create an account user | not implemented yet |
| delete | /account/user/{accountUserId} | Deletes asynchronous an account user | not implemented yet |
| get | /account/user/{accountUserId} | Get an account user | not implemented yet |
| post | /account/user/{accountUserId} | Update an account user | not implemented yet |


### Address

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /address | Get a list of addresses | not implemented yet |
| post | /address/{addressId} | Update an address | not implemented yet |


### AddressReservation

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /address/{addressId}/reservation | Get a list of address reservations | not implemented yet |
| post | /address/{addressId}/reservation/{id}/issue | Issues authorizations for an address reservation | not implemented yet |
| post | /address/{addressId}/reservation/{id}/revoke | Revoke authorizations for an address reservation | not implemented yet |


## AddressToken

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /address/token/{id} | Gives some info about address token | not implemented yet |
| get | /address/token/{id}/redeem | Gives an redeemed address token | not implemented yet |
| post | /address/token/{id}/redeem | Redeems an address token | not implemented yet |


### ApiKey

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /api/key | Get a list of api keys | not implemented yet |
| put | /api/key | Create an api key | not implemented yet |
| delete | /api/key/{apiKeyId} | Delete an api key | not implemented yet |
| post | /api/key/{apiKeyId} | Update an api key | not implemented yet |
| get | /api/key/{apiKeyId}/token | Get a list of api key tokens | not implemented yet |
| put | /api/key/{apiKeyId}/token | Create an api key token | not implemented yet |
| delete | /api/key/{apiKeyId}/token/{id} | Delete an api key token | not implemented yet |
| post | /api/key/{apiKeyId}/token/{id} | Update an api key token | not implemented yet |


### Company

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /company | Get an list of companies | not implemented yet |


### Service

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /service/{serviceId} | Get a service | not implemented yet |
| post | /service/{serviceId}/link | Links a service | not implemented yet |
| post | /service/{serviceId}/sync | Syncs a service | not implemented yet |
| post | /service/{serviceId}/unlink | Unlinks a service | not implemented yet |


### Smartlock

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /smartlock | Get a list of smartlocks | __`getSmartLocks(parameters)` since 2.0.0__ |
| put | /smartlock | Create a smartlock | not implemented yet |
| delete | /smartlock/{smartlockId} | Delete a smartlock | not implemented yet |
| get | /smartlock/{smartlockId} | Get a smartlock | __`getSmartLock(smartlockId)` since 2.0.0__ |
| post | /smartlock/{smartlockId} | Update a smartlock | __`updateSmartlock(smartlockId, update)` since 2.0.0__ |
| post | /smartlock/{smartlockId}/action | Lock & unlock a smartlock | __`setAction(smartlockId, action)` since 2.0.0__ |
| post | /smartlock/{smartlockId}/admin/pin | Updates a smartlock admin pin | not implemented yet |
| post | /smartlock/{smartlockId}/advanced/config | Updates a smartlock advanced config | not implemented yet |
| post | /smartlock/{smartlockId}/config | Updates a smartlock config | not implemented yet |
| post | /smartlock/{smartlockId}/sync | Syncs a smartlock | not implemented yet |
| post | /smartlock/{smartlockId}/web/config | Updates a smartlock web config | not implemented yet |


### SmartlockAuth

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /smartlock/auth | Get a list of smartlock authorizations for your smartlocks | __`getSmartLockAuths(parameters)` since 2.0.0__ |
| put | /smartlock/auth | Creates asynchronous smartlock authorizations | not implemented yet |
| get | /smartlock/{smartlockId}/auth | Get a list of smartlock authorizations | __`getSmartLockAuth(smartlockId)` since 2.0.0__ |
| put | /smartlock/{smartlockId}/auth | Creates asynchronous a smartlock authorization | not implemented yet |
| delete | /smartlock/{smartlockId}/auth/{id} | Deletes asynchronous a smartlock authorization | not implemented yet |
| get | /smartlock/{smartlockId}/auth/{id} | Get a smartlock authorization | __`getSmartLockAuth(smartlockId, userId)` since 2.0.0__ |
| post | /smartlock/{smartlockId}/auth/{id} | Updates asynchronous a smartlock authorization | not implemented yet |


### SmartlockLog

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /smartlock/log | Get a list of smartlock logs for all of your smartlocks | __`getSmartlockLogs(parameters)` since 2.0.0__ |
| get | /smartlock/{smartlockId}/log | Get a list of smartlock logs | __`getSmartlockLogs(smartlockId, parameters)` since 2.0.0__ |


### Subscription

| Request Type | Path | Action | Implemented |
| ------------ | ---- | ------ | --------- |
| get | /subscription | Get a list of subscriptions | __`getSubscription()` since 2.0.0__ |
| get | /subscription/{subscriptionId} | Get a subscription | __`getSubscription(subscriptionId)` since 2.0.0__ |


## Changelog

### 2.0.1 (2019-03-22)
- (zefau) Node.js v6 compatibility

### 2.0.0 (2019-03-22)
- (zefau) Refactored the API implementation using [request-promise](https://www.npmjs.com/package/request-promise)


## API Documentation (using JSDoc)
You may update the API documentation using JSDoc (https://github.com/jsdoc3/jsdoc#installation-and-usage):
```
jsdoc lib -d docs --template ../minami
```


## License
The MIT License (MIT)

Copyright (c) 2019 Zefau <zefau@mailbox.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
