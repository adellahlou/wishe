CardsList = new Mongo.Collection("cardsList");


CardsList = new SimpleSchema({
	title : {
		type: String,
		label: "CardList Title",
	},

	cards : {
		type: [CardsSchema]
	},

	privacy : {
		type: String,
		label: "Privacy",
		defaultValue : "open"
	}
});