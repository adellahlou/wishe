CardLink = React.createClass({
	propTypes : {
		card: React.PropTypes.object.isRequired,
		action: React.PropTypes.oneOf(['make', 'edit','view']),
		classes: React.PropTypes.arrayOf(React.PropTypes.string)
	},

	getDefaultProps(){
		return { 
			classes: [], 
			action:'view'
		}
	},

	render(){
		let path = GenRoute(card._id, this.props.action);
		let classes = 'link-card ' +  this.props.classes.join(' ');
		let content = this.props.children || card.title;

		return (
			<Link path={path} className={classes}>{content}</Link>
		);
	}
});