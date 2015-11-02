SearchLink = React.createClass({
	propTypes : {
		search: React.PropTypes.object.isRequired,
		classes: React.PropTypes.string 
	},

	getDefaultProps(){
		return { 
			classes: "", 
		}
	},

	render(){
		let path = GenRoute.search(this.props.search._id);
		let classes = 'link-search ' +  this.props.classes;
		let content = this.props.children || this.props.search.title;

		return (
			<Link path={path} classes={classes}>{content}</Link>
		);
	}
});