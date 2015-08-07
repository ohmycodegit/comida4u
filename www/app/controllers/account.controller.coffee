(->
  AccountController = ($scope) ->
    $scope.settings = enableFriends: true
    return

  AccountController
    .$inject = ['$scope']

  angular
    .module 'c4u.controllers.account', []
    .controller 'AccountCtrl', AccountController
)()
