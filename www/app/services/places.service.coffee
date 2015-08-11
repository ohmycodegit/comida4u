(->
	PlacesService = ->
		places = 
			[
				{id: 1, name:"KBoom!", address:"Calle falsa 123", phone: "12345678", score:"5"},
				{id: 2, name:"Fake", address:"Calle falsa 123", phone: "-", score:"3"},
				{id: 3, name:"Oh la la", address:"Calle falsa 123", phone: "12345678", score:"2"},
				{id: 4, name:"Bleh", address:"Calle falsa 123", phone: "12345678", score:"1.5"}
			]
		{
			all: ->
					places
				remove: (place) ->
					places.splice places.indexOf(chat), 1
					return
			get: (placeId) ->
				i = 0
				while i < places.length
				  if places[i].id == parseInt(placeId)
				    return places[i]
				  i++
				null
		}
	angular.module('c4u.services.places', [])
		.factory 'placesService', PlacesService
)()