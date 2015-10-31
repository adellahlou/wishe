Meteor.methods({
	createCard: function(card){
		/* Expected card structure{
			privacy,
			title,
			description,
			stage
		}
		*/
		let user = Meteor.user();
		card.author = user.username();
		card.authorId = user.userid();
		Cards.insert({
			card
		});
	}
});