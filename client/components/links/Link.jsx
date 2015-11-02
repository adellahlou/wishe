Link = React.createClass({
	propTypes: {
		path : React.PropTypes.string.isRequired,
		classes: React.PropTypes.string//React.PropTypes.array
	},

	getDefaultProps(){
		return {
			classes : ""
		};
	},

	render(){
		let fullClasses = "link " + this.props.classes;

		return (
			<a className={fullClasses} href={this.props.path}>{this.props.children}</a>
		);
	}
});