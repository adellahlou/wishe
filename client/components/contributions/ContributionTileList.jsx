ContributionTileList = React.createClass({
	propTypes : {
		contributions : React.PropTypes.array
	},


	getInitialState(){
		return {
			sorting : null,
			filters : [],
			showOptions: true
		};
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
					&nbsp;Contribution List could not be displayed :(
			</div>);
	},

	getList(){
		//TODO: Implement Contributions and relational data
		return this.props.contributions.map(function(contribution) {
				return (
					<ContributionTile key={Math.floor(1000*Math.random())} contribution={contribution} />
				);
			});
	},

	render(){
		let display = this.props.contributions ?   this.getList() : this.getErrorMessage();
			
		return (
			<ul className="list-group">
				{display}
			</ul>
		);
	}
});