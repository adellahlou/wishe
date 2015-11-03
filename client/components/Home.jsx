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

		return (
			<div className="home">
				<div className="jumbotron">
					<div className="container-fluid">
						<div className="text-center">
							<h1 className="frontpage">WishE - Crowd something special</h1>
						</div>
						{/*<CardTileList resourceId={lastestListID} source="cardsList"/>*/}
					</div>
				</div>
				<h2 className="text-center">Featured CrowdSearches </h2>
				<div className="container-fluid">
					<SearchTileList limit={3} />
				</div>
			</div>
		);
	}
});  