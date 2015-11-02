UserLink = React.createClass({
	propTypes : {
		user : React.PropTypes.object.isRequired,
		classes : React.PropTypes.string
	},

	getDefaultProps(){
		return {
			classes : "" 
		};
	},

	render(){
		let path = GenRoute.user(this.props.user._id);
		let classes = 'link-user ' + this.props.classes;
		let content = this.props.children || this.props.user.username;

		return (
			<Link classes={classes} path={path}>{content}</Link>
		);
	}
})