SearchTile = React.createClass({
	propTypes : {
		search : React.PropTypes.object.isRequired
	},

	render(){
		let search = this.props.search;		

		return (
			<li className="list-group-item" >
				<h3 className="list-group-item-heading"> <SearchLink search={search}/></h3>
				<h4>Searcher - <UserLink user={search.owner} /></h4>
				<p className="list-group-item-text">{search.description}</p>
			</li>
		)
	}
});