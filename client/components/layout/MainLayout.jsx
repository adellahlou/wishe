MainLayout = React.createClass({
	propTypes : {
		active : React.PropTypes.string
	},

	render(){
		return (
			<div> 
				{this.props.header}
				<main> {this.props.content} </main>
				{this.props.footer}
			</div>
		);
	}
})