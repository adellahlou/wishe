LoadingSpinner = React.createClass({
	render(){
		return (
			<div className="loading loading-spinner">{this.props.children}</div>
		);
	}
})