const Nuki = require('./index.js');

let token = "2e7002563be74de45381c6ec8222572d136eb4aaefe3a0582a53b84bffd4311e48acbc0e6f2b4cc0"
let nuki = new Nuki(token)


nuki.getNotification().then(function(res) {
	console.log('getNotification(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getNotification(): ' + e.message)});


nuki.getAccount().then(function(res) {
	console.log('getAccount(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getAccount(): ' + e.message)});


nuki.getSmartlocks().then(function(res) {
	console.log('getSmartlocks(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlocks(): ' + e.message)});


nuki.getSmartlockAuths().then(function(res) {
	console.log('getSmartlockAuths(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockAuths(): ' + e.message)});


nuki.getSmartlockUsers().then(function(res) {
	console.log('getSmartlockUsers(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockUsers(): ' + e.message)});


nuki.getSmartlockLogs({limit: 3}).then(function(res) {
	console.log('getSmartlockLogs({limit: 3}): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSmartlockLogs({limit: 3}): ' + e.message)});


nuki.getSubscription().then(function(res) {
	console.log('getSubscription(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getSubscription(): ' + e.message)});


nuki.getModel({'brandId': 4}).then(function(res) {
	console.log('getModel(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getModel(): ' + e.message)});


nuki.getBrand().then(function(res) {
	console.log('getBrand(): ' + JSON.stringify(res))

}).catch(function(e) {console.error('getBrand(): ' + e.message)});

