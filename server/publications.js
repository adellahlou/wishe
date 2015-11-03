Meteor.publish('searches-page', function(page, size){
	page = page || 1;
	size = size || 40;
	let skip = (page - 1) * size

	return Searches.find({}, {
		limit : size,
		skip : skip
	});
});

Meteor.publish('cardsList', function(cardsListId){
	if(!cardsListId)
		throw new Error();

	return CardLists.find({ _id : cardsListId});
});

Meteor.publish('searches-single', function(searchId){
	if(!searchId)
		throw new Error();

	return Searches.findOne({_id : searchId});
});


Meteor.publish('userProfile', function(userId){
	if(!userId)
		throw new Error();

	return [];
});

Meteor.publish('card', function(cardId){
	if(!searchId)
		throw new Error();

	return Cards.find({_id : cardId});
});

Meteor.publish('featured-crowdsearch', function(){
	return Searches.find({}, {sort : {priority : -1}, limit: 1});
});

Meteor.publish('rooms', function(roomId, roomTitle){
	if (roomId)
		return Rooms.find({roomId : roomdId});
	else
		return Rooms.find({title :roomTitle});
});