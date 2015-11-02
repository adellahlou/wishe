Cards = new Mongo.Collection("cards");

ContributionSchema = new SimpleSchema({
	user : {
		type: Object,
		label: "Contributor",
		optional: false
	},

	recipient : {
		type: Object,
		label: "Recipient",
		optional : false
	},

	"recipient.type" : {
		type: String,
		label : "Recipient Type",
		optional : false
	},

	contributionType: {
		type: String,
		optional: false
	}, 

	contribution :{
		type: Object
	},

	createdAt: {
		type: Date,
		label: "CreatedAt",
		optional: false
	}
});

CardsSchema = new SimpleSchema({
	owner : {
		type: Object,
		label: "Owner",
		optional: false
	},

	title : {
		type : String,
		optional : false
	},

	description : {
		type : String,
		optional : false
	},

	privacy : {
		type: String,
		label : "Privacy",
		defaultValue: "open"
	},

	contributions : {
		type: [ContributionSchema]
	},


	art: {
		type: [ArtSchema],
		optional : true
	}
});

