Searches = new Mongo.Collection('searches');

SearchSchema = new SimpleSchema({
	owner : {
		type: Object,
		optional: false
	},

	description : {
		type: String,
		optional: false
	},

	tags: {
		type: [String],
		defaultValue: []
	},

	contributions : {
		type: [ContributionSchema],
		defaultValue: []
	}
});