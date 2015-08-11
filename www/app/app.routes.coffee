angular
  .module 'c4u.routes', []
  .config ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      .state 'tab',
        url: '/tab'
        abstract: true
        templateUrl: 'templates/tabs.html'

      .state 'tab.dash',
        url: '/dash'
        views: 'tab-dash':
          templateUrl: 'templates/tab-dash.html'
          controller: 'DashCtrl as dashboard'

      .state 'tab.chats',
        url: '/chats'
        views: 'tab-chats':
          templateUrl: 'templates/tab-chats.html'
          controller: 'ChatsCtrl as chatx'

      .state 'tab.chat-detail',
        url: '/chats/:chatId'
        views: 'tab-chats':
          templateUrl: 'templates/chat-detail.html'
          controller: 'ChatDetailCtrl'

      .state 'tab.account',
        url: '/account'
        views: 'tab-account':
          templateUrl: 'templates/tab-account.html'
          controller: 'AccountCtrl'

      .state 'tab.places',
        url: '/places'
        views: 'tab-places':
          templateUrl: 'templates/places/tab-places.html'
          controller: 'PlacesCtrl'

      .state 'tab.places-detail',
        url: '/places/:placeId'
        views: 'tab-places':
          templateUrl: 'templates/places/detail.html'
          controller: 'PlaceDetailCtrl'

    $urlRouterProvider.otherwise '/tab/dash'
    return
