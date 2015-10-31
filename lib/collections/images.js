var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images",{
	stores: [imageStore]
});


if (Meteor.isServer) {
	Images.allow({
		'insert' : function(){
			// TODO: Restrict inserts
			return true;
		},

		'download' : function(){
			return true;
		}
	});
}