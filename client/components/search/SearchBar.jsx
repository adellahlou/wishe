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

	clear(){
		ReactDOM.findDOMNode(this.refs.description).value = "";
		ReactDOM.findDOMNode(this.refs.title).value = "";
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
			this.clear();
		}
	},

	render(){
		let disp = null, 
			classes = "btn btn-primary", 
			placeholder="Start a CrowdSearch...",  
			style={padding: 10};

		if (this.state.focused) {
			disp = (<input type="text" className="form-control" ref="description" placeholder="Give details of what you're searching for..."/>);
			classes += " btn-lg";
			placeholder = "Give a good title to your search...";
		} 

		return(
			<div className="row">
			<div className="col-md-8 col-md-offset-2">
				<div className="input-group" style={style}>
			      <input type="text" className="form-control" ref="title" placeholder={placeholder} onFocus={this.handleFocus}/>
			      {disp}
			      <span className="input-group-btn">
				      <button className={classes} type="button" onClick={this.handleSubmit}>CrowdSearch!</button>
			      </span>
			    </div>
			</div>
		    </div>
		);

	}

});