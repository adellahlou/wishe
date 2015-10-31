Meteor.publish('cardsList', function(cardsListId){
	return CardLists.find({ _id : cardsListId});
});


Meteor.publish('userProfile', function(userid){
	return [];
});

Meteor.publish('card', (cardId)=>{
	return Cards.find({_id : cardId});
})

Meteor.publish('room', function(roomId, roomTitle){
	if (roomId)
		return Rooms.find({roomId : roomdId});
	else
		return Rooms.find({title :roomTitle});
});