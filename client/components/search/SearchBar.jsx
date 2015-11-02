SearchBar = React.createClass({
	propTypes: {
		name  : React.PropTypes.string,
		displayName : React.PropTypes.string
	},

	getInitialState(){
		return {
			searchTitle : "",
			focused : false,
			searchDescription : ""
		}
	},

	handleFocus(e){
		console.log("focused");
		this.setState({focused : true});
	},

	handleSubmit(e){
		let user = Meteor.user();

		if(!user){
			alert("You need to sign in to start a search");
		} else{
			let newSearch = {
				owner : user,
				description: ReactDOM.findDOMNode(this.refs.description).value,
				title : ReactDOM.findDOMNode(this.refs.title).value,
				priority : user ? (user.priority || 0) : 0
			}
			console.log(newSearch)

			Searches.insert(newSearch);
		}
	},

	render(){
		let disp = null, classes = "btn btn-primary";

		if (this.state.focused) {
			disp = (<input type="text" className="form-control" ref="description" placeholder="Describe more what you're searching for..."/>);
			classes += " btn-lg";
		} 

		let style = {
			padding : 10
		};

		return(
			<div className="row">
			<div className="col-md-8 col-md-offset-2">
				<div className="input-group" style={style}>
			      <input type="text" className="form-control" ref="title" placeholder="Start a CrowdSearch..." onFocus={this.handleFocus}/>
			      {disp}
			      <span className="input-group-btn">
				      <button className={classes} type="button" onClick={this.handleSubmit}>CrowdSearch!</button>
			      </span>
			    </div>
			</div>
		    </div>
		);

		// return (
		// 	<form role="form" onsubmit={this.handSubmit}>
		// 		<div className="form-group">
		// 			<label for="search">
		// 				{p.displayName ? p.displayName : p.name}
		// 			</label>
		// 			<input className="form-control" type="text" name="search" ref={this.props.name} />
		// 			<button type="submit" className="btn btn-primary">Search</button> 
		// 		</div>
		// 	</form>
		// )
	}

});