UserLogin = React.createClass({

	componentDidMount(){
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container));
	},

	render(){
		return (
			<div ref="container"> 
			</div>
		);
	}
});