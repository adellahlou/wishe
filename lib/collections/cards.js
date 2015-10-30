Cards = new Mongo.Collection("cards");


ContributionSchema = new SimpleSchema({
	user : {
		type: user
	},
	action: []
});

CardsSchema = new SimpleSchema({

	author : {
		type: user,
		label: "Author"
	},

	contributions: [ContributionSchema]

})