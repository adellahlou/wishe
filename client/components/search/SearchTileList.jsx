SearchTileList = React.createClass({
	propTypes : {},

	mixins : [ReactMeteorData],


	getInitialState(){
		return {
			sorting : null,
			filters : [],
			showOptions: true
		};
	},

	getMeteorData(data){
		var data = {};
		var handle = Meteor.subscribe("searches");
		
		// if (handle.ready()){
		// 	console.log("Received data");
		// 	data.searches = Searches.find({}).fetch();
		// }
		data.searches = Searches.find({}).fetch();
		console.log(data);
		return data;
	},

	filterSearches(){
		return null;
	},

	sort(){
		return null;
	},

	getErrorMessage(){
		return (
			<div className="alert alert-danger" role="alert"> 
				<span className="glyphicon glyphicon-alert"></span>
					&nbsp;Search List could not be displayed :(
			</div>);
	},

	getList(){
		return this.data.searches.map(function(search) {
				return (
					<SearchTile key={search._id} search={search} />
				);
			});
	},

	render(){
		let display = this.data.searches ?   this.getList() : this.getErrorMessage();
			
		return (
			<ul className="list-group">
				{display}
			</ul>
		);
	}
});