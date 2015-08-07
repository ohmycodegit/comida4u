(->
  ChatsController = ($scope, chatService, sessionsService) ->
    init = () =>
      vm = @
      vm.session = sessionsService.get().data
      $scope.chats = chatService.all()

      $scope.remove = (chat) ->
        chatService.remove chat
        return

    init()
    return

  ChatDetailController = ($scope, $stateParams, chatService) ->
    $scope.chat = chatService.get($stateParams.chatId)
    return

  ChatsController
    .$inject = ['$scope', 'chatService', 'sessionsService']
  ChatDetailController
    .$inject = ['$scope', '$stateParams', 'chatService']

  angular
    .module 'c4u.controllers.chats', []
    .controller 'ChatsCtrl', ChatsController
    .controller 'ChatDetailCtrl', ChatDetailController
)()
