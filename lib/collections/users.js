Users = new Mongo.Collection('users'); // also accessible via Meteor.users

UserSchema = new SimpleSchema({
	username: {
		type: String,
		unique: true, 
		optional: true
	}, 

	emails: {
		type: [Object],
		optional: true
	},

	createdAt: {
		type: Date
	},

	profile: {
		type: Object,
		optional: true
	},

	services: {
		type: Object,
		defaultValue: {}
	}

});