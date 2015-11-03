SearchTile = React.createClass({
	propTypes : {
		search : React.PropTypes.object.isRequired
	},

	getInitialState(){
		return {
			priority: this.props.search.priority
		};
	},

	handleLike(e){
		e.preventDefault();

		//TODO: PREVENT USERS FROM VOTING REDUNDANTLY, SHOW USERS A SUCCESS WHEN THEY DO VOTE
		if (Meteor.user()){
			let np = this.state.priority + 1;
			Searches.update( this.props.search._id, {$set : {priority : np}})
			this.setState({priority: np});
		} else {
			alert('Please log in to vote');
		}
	},

	render(){
		let search = this.props.search;		

		return (
			<li className="list-group-item" >
				<div className="row">
					<div className="col-md-1">
						<button className="btn btn-primary" onClick={this.handleLike}>
							<span className="glyphicon glyphicon-thumbs-up"></span>
							&nbsp; + {this.state.priority}
						</button>
					</div>
					<div className="col-md-10 col-md-offset-1">
						<h3 className="list-group-item-heading"> <SearchLink search={search}/></h3>
						<h4>Searcher - <UserLink user={search.owner} /></h4>
						<p className="list-group-item-text">{search.description}</p>
					</div>
				</div>
			</li>
		)
	}
});