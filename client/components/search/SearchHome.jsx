SearchHome = React.createClass({
	propTypes: {

	},

	render(){
		return(
			<div className="container"> 
				<div className="jumbotron">
					<h1>CrowdSearch <small>Search something special</small></h1>
				</div>
				<SearchBar />
				<SearchTileList />
			</div>
		)
	}
})