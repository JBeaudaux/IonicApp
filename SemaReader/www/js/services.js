angular.module('starter.services', ['ngResource'])

//angular.module('Authentication')

.service('authService', function ()
{
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

	//Clears all former creditentials
	service.ClearCredentials = function ()
	{
		return {}
		//$rootScope.globals = {};
		//$cookieStore.remove('globals');
		//$http.defaults.headers.common.Authorization = 'Basic ';
	};
});