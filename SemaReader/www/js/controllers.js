angular.module('starter.controllers', ['starter.services'])


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AboutCtrl', function($scope)
{
  //Nothing to do right now
})

.controller('InterCtrl', function($scope)
{
  //Nothing to do right now
})


/**
 * Manages the search engine via SEMA exchange
 * @Param data.patientID ID of the patient (optional)
 * @Param data.patientName Name of the patient (optional)
 * @Param data.interventionID ID of the intervention (optional)
 * @Param data.interventionDate Date of the intervention (optional)
 * @Param data.sortChoice Above-mentioned key used for sorting the interventions (optional)
 */
.controller('SearchCtrl', function($scope, $http, $state, $ionicPopup)
{
  $scope.data = {};

  $scope.search = function()
  {
    $scope.data.result = "Test " + $scope.data.sortChoice
    $searchURL = "http://172.16.16.204:8080/SemaServer/public/v1/pdq/vid/"

    if(angular.isUndefined($scope.data.patientID) && angular.isUndefined($scope.data.patientName) &&
      angular.isUndefined($scope.data.interventionID) && angular.isUndefined($scope.data.interventionDate))
    {
      var alertPopup = $ionicPopup.alert(
      {
        title: 'No search parameter',
        template: 'Please fill at least one field to perform the search.'
      });
    }
    else if (angular.isUndefined($scope.data.sortChoice))
    {
      var alertPopup = $ionicPopup.alert(
      {
        title: 'No sorting key',
        template: 'Please select a value to filter the results.'
      });
    }
    else
    {
      //Establish connection to SEMA server
      $http.get($searchURL)
      .success(function(data)
      {
        $state.go('tab.inter');
      })
      .error(function(data)
      {
        var alertPopup = $ionicPopup.alert(
        {
          title: 'No result found',
          template: 'Please check your criteria!'
        });
      });
    };
  }
})



/**
 * Manages the connection to SEMA remote server
 * @Param data.username username to login with
 * @Param data.password password to login with
 */
.controller("IntroCtrl", function($scope, $http, $state, $ionicPopup, authService)
{
  //authService.ClearCredentials();
  $scope.data = {};


  $scope.$on('event:authFailed', function(e, status)
  {
    var alertPopup = $ionicPopup.alert(
    {
      title: 'Connection failed',
      template: 'Connection to SEMA server failed due to invalid credentials.'
    });
  });

  $scope.$on('event:authSucceed', function(e, status)
  {
    $state.go('tab.search');
  });


  $scope.login = function()
  {
    //window.authService.SemaLogin();

    if(angular.isUndefined($scope.data.username) || angular.isUndefined($scope.data.password) ||
      $scope.data.username === '' || $scope.data.password === '')
    {
      var alertPopup = $ionicPopup.alert(
      {
        title: 'Missing information',
        template: 'Please fill all your credentials.'
      });
    }
    else
    {
      console.log("Got user=" + $scope.data.username + " and pass=" + $scope.data.password)

      $scope.result = authService.SemaLogin($scope.data.username, $scope.data.password);
    }
  }
});

// Semadev : 37.58.177.187