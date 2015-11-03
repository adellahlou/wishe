CardsHome = React.createClass({
	propTypes: {

	},

	render(){
		return(
			<div className="container"> 
				<div className="jumbotron">
					<h1>CrowdMake <small>make it easy</small></h1>
				</div>
				<CardTileList />
			</div>
		)
	}
});