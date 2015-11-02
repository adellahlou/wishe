Searches = new Mongo.Collection('searches');

SearchSchema = new SimpleSchema({
	owner : {
		type: Object,
		optional: false
	},

	title: {
		type: String,
		optional: false
	},

	tags: {
		type: [String],
		defaultValue : []
	},

	description : {
		type: String,
		optional: false
	},


	contributions : {
		type: [ContributionSchema],
		defaultValue: []
	}
});