Meteor.publish('cardsList', function(cardsListId){
	return CardLists.find({ _id : cardsListId});
});

Meteor.publish('searches', function(searchId){
	let query = searchId ? {_id : searchId} : {};
	return Searches.find(query);
});


Meteor.publish('userProfile', function(userid){
	return [];
});

Meteor.publish('card', (cardId)=>{
	return Cards.find({_id : cardId});
})

Meteor.publish('featured-crowdsearch', ()=>{
	return Searches.find().sort({'owner.priority' : -1});
});

Meteor.publish('room', function(roomId, roomTitle){
	if (roomId)
		return Rooms.find({roomId : roomdId});
	else
		return Rooms.find({title :roomTitle});
});