ArtSchema = new SimpleSchema({
	author : {
		type: String,
		optional: false
	},

	imageId : {
		type: String,
		optional: false
	},

	createdAt : {
		type: Date,
		optional: false
	},

	lastUpdated : {
		type: Date,
		optional : false
	}
});