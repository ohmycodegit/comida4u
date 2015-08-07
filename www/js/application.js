angular.module('c4u', ['ionic', 'c4u.routes', 'c4u.controllers.chats', 'c4u.controllers.dashboard', 'c4u.controllers.account', 'c4u.services.chats', 'c4u.services.sessions']).run(["$ionicPlatform", function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
}]);

angular.module('c4u.routes', []).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  }).state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl as dashboard'
      }
    }
  }).state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl as chatx'
      }
    }
  }).state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  }).state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/tab/dash');
}]);

(function() {
  var AccountController;
  AccountController = function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  };
  AccountController.$inject = ['$scope'];
  return angular.module('c4u.controllers.account', []).controller('AccountCtrl', AccountController);
})();

(function() {
  var ChatDetailController, ChatsController;
  ChatsController = function($scope, chatService, sessionsService) {
    var init;
    init = (function(_this) {
      return function() {
        var vm;
        vm = _this;
        vm.session = sessionsService.get().data;
        $scope.chats = chatService.all();
        return $scope.remove = function(chat) {
          chatService.remove(chat);
        };
      };
    })(this);
    init();
  };
  ChatDetailController = function($scope, $stateParams, chatService) {
    $scope.chat = chatService.get($stateParams.chatId);
  };
  ChatsController.$inject = ['$scope', 'chatService', 'sessionsService'];
  ChatDetailController.$inject = ['$scope', '$stateParams', 'chatService'];
  return angular.module('c4u.controllers.chats', []).controller('ChatsCtrl', ChatsController).controller('ChatDetailCtrl', ChatDetailController);
})();

(function() {
  var DashboardController;
  DashboardController = function($sce) {
    var vm;
    vm = this;
    vm.message = $sce.trustAsHtml("This message is loaded from the controller. <i>controllerAs</i> is defined in the app/routes file.");
  };
  DashboardController.$inject = ["$sce"];
  return angular.module('c4u.controllers.dashboard', []).controller('DashCtrl', DashboardController);
})();

(function() {
  var ChatsService;
  ChatsService = function() {
    var chats;
    chats = [
      {
        id: 0,
        name: 'Ben SONSs',
        lastText: 'You on your way?',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
      }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
      }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
      }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
      }
    ];
    return {
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        var i;
        i = 0;
        while (i < chats.length) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
          i++;
        }
        return null;
      }
    };
  };
  return angular.module('c4u.services.chats', []).factory('chatService', ChatsService);
})();

(function() {
  var sessionsService;
  sessionsService = function($http) {
    var Session;
    return new (Session = (function() {
      function Session() {}

      Session.prototype.get = function() {
        return {
          data: "Hello coffee3"
        };
      };

      return Session;

    })());
  };
  return angular.module('c4u.services.sessions', []).factory('sessionsService', ['$http', sessionsService]);
})();
