angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ConnectCtrl', function($scope, LoginService, $ionicPopup, $state)
{
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AboutCtrl', function($scope)
{
  //Nothing to do right now
})

.controller("IntroCtrl", function($scope, $http, $timeout, $state, $ionicPopup)
{
  //Sets a 5s timeout to go to next page
  /*
  $timeout(function()
  {
      $state.go("tab.connect");
  }, 5000);

  $scope.go = function()
  {
    $state.go("tab.connect");
  };
  */

  $scope.data = {};

  $scope.login = function()
  {
    /*if($scope.data.username == 'aaa' && $scope.data.password == "bbb")
    {
      $state.go('tab.inter');
    }*/

    //Establish connection to SEMA server
    $http.get("http://172.16.16.204:8080/SemaServer/public/v1/info")
    .success(function(data)
    {
      $state.go('tab.inter');
    })
    .error(function(data)
    {
      var alertPopup = $ionicPopup.alert({
                title: 'Connection failed!',
                template: 'Please check your credentials!'
            });
    });


    /*LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data)
    {
      $state.go('tab.inter');
    }).error(function(data)
    {
      $state.go('tab.about');
    });*/
  }

})

.controller("ExampleController", function($scope, $timeout)
{
});
;
