Home = React.createClass({
	propTypes : {},

	// mixins : [ReactMeteorData],

	getInitialState(){
		return {
			latestListID : 11111
		};
	},
	
	handleListError(err){
		console.log(err);
	},
	

	render(){
		let latestListID = this.props.latestListID;

		return (<div className="home">
			<div className="jumbotron">
				<div className="container-fluid">
					{/*<CardTileList resourceId={lastestListID} source="cardsList"/>*/}
				</div>
			</div>
			<p> This is a test of updating </p>
		</div>);
	}
});  