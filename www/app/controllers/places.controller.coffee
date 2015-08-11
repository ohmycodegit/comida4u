(->
  PlacesController = ($scope, placesService) ->
    init = ->
      $scope.places = placesService.all()


    init()
    return

  PlaceDetailController = ($scope, $stateParams, placesService) ->
    $scope.place = placesService.get($stateParams.placeId)
    return

  PlacesController
    .$inject = ['$scope', 'placesService']
  PlaceDetailController
    .$inject = ['$scope', '$stateParams', 'placesService']

  angular
    .module 'c4u.controllers.places', []
    .controller 'PlacesCtrl', PlacesController
    .controller 'PlaceDetailCtrl', PlaceDetailController
)()
