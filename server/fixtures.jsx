Meteor.startup(function(){
	if(Meteor.users.find().count() < 2){
		console.log("No users")
		Accounts.createUser({username : "the owner", password: "tester123"});
		
		_(8).times((n)=>{
			let username = Fake.user({fields : ['username']}).username;

			Accounts.createUser({
				username : username,
				password: "tester123"
			});
		});
	}

	Factory.define('search', Searches, {
		owner : ()=>{
			return Owner;
		},

		title : ()=>{
			return Fake.sentence();	
		},

		tags : ()=>{
			var ret = [];
			var numTags = Math.floor(10*Math.random());
			for(var i =0; i < numTags; i++)
				ret.push(Fake.word());

			return ret;
		},

		description : ()=>{
			let parLength = Math.floor(4*Math.random());
			return Fake.paragraph(parLength);
		},

		priority : ()=>{
			return Math.floor(1000*Math.random());
		},

		contributions : ()=>{
			var ret = [];
			var numContributions = Math.floor(10*Math.random());

			// for(var i =0; i < numContributions; i++)
			// 	ret.push(Fake.word());

			return ret;
		}
	});


	if(Cards.find().count() === 0){
		console.log("No cards");
	}

	if(Searches.find().count() === 0){
		console.log("No Searches")
		_(10).times((n)=>{
			Factory.create('search');
		})
	}
});


// Factory.define('contribution)

// Factory.define('rooms', Rooms, {
// 	owner : ()=> {
// 		return {

// 		}	
// 	},

// 	title: {
// 		type: String,
// 		optional: false
// 	},

// 	purpose: {
// 		type: Object,
// 		optional: true
// 	},

// 	createdAt : {
// 		type: Date,
// 		optional: false
// 	},

// 	type: {
// 		type: String,
// 		optional: false
// 	},

// 	contributions : {
// 		type: [ContributionSchema],
// 		defaultValue: []
// 	},

// 	lastUpdated : {
// 		type: Date,
// 		optional: false
// 	}
// });

