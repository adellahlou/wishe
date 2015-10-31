Meteor.publish('cardsList', function(cardsListId){
	return CardLists.find({ _id : cardsListId});
});

Meteor.publish('userProfile', function(userid){
	return [];
});

Meteor.publish('room', function(roomId, roomName){
	return
});