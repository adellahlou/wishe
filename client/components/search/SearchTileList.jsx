SearchTileList = React.createClass({
	propTypes : {
		limit : React.PropTypes.number,
		searches : React.PropTypes.array
	},

	mixins : [ReactMeteorData],

	getInitialState(){
		return {
			sorting : null,
			filters : [],
			showOptions: true
		};
	},

	getMeteorData(data){
		if(this.props.searches){
			return {};
		}

		var data = {};
		let query = {
			limit: this.props.limit || 20,
			sort: { priority : -1, createdAt: -1}
		};
		
		data.searches = Searches.find({}, query).fetch();
		return data;
	},

	filter(list){
		return null;
	},

	mapTransform(search){
		return (
			<SearchTile key={search._id} search={search} />
		);
	},

	getErrorMessage(){
		return (
			<div className="alert alert-danger" role="alert"> 
				<span className="glyphicon glyphicon-alert"></span>
					&nbsp;Search List could not be displayed :(
			</div>
		);
	},

	getList(){
		if(!this.props.searches && !this.data.searches)
			return null;

		return this.props.searches ? this.props.searches.map(this.mapTransform) : this.data.searches.map(this.mapTransform)
	},

	render(){
		let content = this.getList() || this.getErrorMessage();
		return (
			<ul className="list-group">
				{content}
			</ul>
		);
	}
});