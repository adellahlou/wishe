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
				<script  src="scripts/Autolinker/dist/Autolinker.min.js" />
			</div>
		);
	}
})