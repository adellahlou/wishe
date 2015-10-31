Rooms = new Mongo.Collection("rooms");
  
RoomsSchema = new SimpleSchema({
	owner : {
		type: Object,
		optional: false
	},

	title: {
		type: String,
		optional: false
	},

	purpose: {
		type: Object,
		optional: true
	},

	createdAt : {
		type: Date,
		optional: false
	},

	type: {
		type: String,
		optional: false
	},

	contributions : {
		type: [ContributionSchema],
		defaultValue: []
	},

	lastUpdated : {
		type: Date,
		optional: false
	}
});