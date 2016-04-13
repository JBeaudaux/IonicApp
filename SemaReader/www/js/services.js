angular.module('starter.services', ['ngResource'])

//angular.module('Authentication')

.factory('logService', function() {
	console.log("Here I am in Service")
	return {}
})

.service('authService', function ()
{
	console.log("Got in authService")
	/*var service = {};

	// Attempts to login to remote server
	service.Login = function (user, pwd, callback)
	{
		$http.post('/api/authenticate', { username: username, password: password })
			.success(function (response)
			{
				callback(response);
			})
			.error(function(data)
			{
				var alertPopup = $ionicPopup.alert(
				{
					title: 'Connection failed',
					template: 'Please check your credentials!'
				});
			});
	};*/

	// Attempts to login to remote server
	service.SemaLogin = function (user, pwd)
	{
		console.log("Got in authService")
		//$http.get("http://172.16.16.204:8080/SemaServer/public/v1/")
	};

	//Clears all former creditentials
	service.ClearCredentials = function ()
	{
		return {}
		//$rootScope.globals = {};
		//$cookieStore.remove('globals');
		//$http.defaults.headers.common.Authorization = 'Basic ';
	};
});