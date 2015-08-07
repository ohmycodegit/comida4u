angular
  .module('c4u', [
    'ionic'

    'c4u.routes'

    'c4u.controllers.chats'
    'c4u.controllers.dashboard'
    'c4u.controllers.account'

    'c4u.services.chats'
    'c4u.services.sessions'
  ])
  .run ($ionicPlatform) ->
    $ionicPlatform.ready ->
      # Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      # for form inputs)
      if window.cordova and window.cordova.plugins and window.cordova.plugins.Keyboard
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar true
        cordova.plugins.Keyboard.disableScroll true
      if window.StatusBar
        # org.apache.cordova.statusbar required
        StatusBar.styleLightContent()
      return
    return
