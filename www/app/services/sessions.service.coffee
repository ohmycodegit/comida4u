(->
  sessionsService = ($http) ->
    new class Session
      get: ->
        # $http.get('http://localhost:3000/api/hello')
        return {data: "Hello coffee3"}

  angular
    .module('c4u.services.sessions', [])
    .factory 'sessionsService', ['$http', sessionsService]
)()
