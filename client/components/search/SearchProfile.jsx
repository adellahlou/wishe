SearchProfile = React.createClass({
	propType: {
		searchId : React.PropTypes.string.isRequired
	},

	mixins: [ReactMeteorData],

	getMeteorData(){
		var data = {};
		var handle = Meteor.subscribe('searches', this.props.searchId);
		// if(handle.ready()){
		// 	console.log("Handle is ready");
		// 	data.search = Searches.findOne({_id : this.props.searchId});
		// }

		data.search = Searches.find({_id : this.props.searchId}).fetch()[0];
		return data;
	},

	handleContribution(e){
		console.log(this.data.search);
		let user = Meteor.user();

		if(!user){
			alert("You need to sign in to contribute");
		} else{
			let newContribution = {
				recipient : this.data.search,
				user : user,
				recipientType : "search",
				contributionType: "text",
				content: ReactDOM.findDOMNode(this.refs.contribution).value,
				createdAt : Date.now()
			}


			Searches.update(this.props.searchId, { $push : {contributions : newContribution}});
		}
	},

	getProfile(){
		let search = this.data.search;

		return (
			<div className="container">
			<div className="page-header">
				<h1>
					<SearchLink search={search}/>
					<small> searched by <UserLink user={search.owner}/></small>
				</h1>
			</div>
			<div className="row">
				<div className="col-md-8">
					<h2>Contributions</h2>
					<ContributionTileList contributions={this.data.search.contributions} />
				</div>
				<div className="col-md-4">
					<h3>Contribute to search</h3>
					<div className="input-group">
				      	<input type="text" className="form-control" ref="contribution" placeholder="Make a contribution..." onFocus={this.handleFocus}/>
				      	<span className="input-group-btn">
					    	<button className="btn btn-primary" type="button" onClick={this.handleContribution}>Contribute</button>
					    	<button className="btn btn-primary" type="button" onClick={this.handleContribution}>Upload</button>
				     	</span>
				    </div>
				</div>
			</div>
			</div>
		);
	},

	getLoading(){
		return (
			<div className="container">
				<div className="page-header">
					<h1>
						Loading Profile...
					</h1>
				</div>
			</div>
		);
	},

	render(){
		let display = this.data.search ? this.getProfile() : this.getLoading();
		return display;
	}
})