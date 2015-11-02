SearchHome = React.createClass({
	propTypes: {

	},

	mixins: [ReactMeteorData],

	getMeteorData(){
		var data = {};
		// var handle = Meteor.subscribe('featured-crowdsearch');

		// if (handle.ready()){
		// 	data.search = Searches.find().fetch()[0];
		// }

		// data.search = Searches.find().sort({'owner.priority' : -1}).fetch()[0];

		return data;
	},

	render(){
		let display;

		// if(this.data.search){
		// 	display = (<SearchTile search={this.data.search} />);
		// }else {
		// 	display = (<h3> Loading the search.... </h3>)
		// }
		

		return(
			<div className="container"> 
				<div className="jumbotron">
					<h1>CrowdSearch <small>Find something special</small></h1>
				</div>
				<SearchBar />
				<SearchTileList />
			</div>
		)
	}
})