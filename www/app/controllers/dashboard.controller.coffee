(->
  DashboardController = ($sce) ->
    vm = @
    vm.message = $sce.trustAsHtml("This message is loaded from the controller. <i>controllerAs</i> is defined in the app/routes file.")
    return

  DashboardController
    .$inject = ["$sce"]

  angular
    .module 'c4u.controllers.dashboard', []
    .controller 'DashCtrl', DashboardController
)()
