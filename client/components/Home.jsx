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
		let style = {
			paddingTop : 60
		};

		let latestListID = this.props.latestListID;

		return (<div className="home" style={style}>
			<div className="jumbotron">
				<div className="container-fluid">
					{/*<CardTileList resourceId={lastestListID} source="cardsList"/>*/}
				</div>
			</div>
			<p> This is a test of updating </p>
		</div>);
	}
});