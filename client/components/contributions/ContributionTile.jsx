ContributionTile = React.createClass({
	propTypes : {
		contribution : React.PropTypes.object.isRequired,
		showInteraction : React.PropTypes.bool
	},

	getDefaultProps(){
		return {
			showInteraction : true
		};
	},

	getImageContribution(){
		return  (<img src="http://lorempixel.com/240/160" />);
	},

	getTextContribution(){
		//TODO: Implement Autolinker support
		// let content = Autolinker.link()
		return  (<p className="list-group-item-text">{this.props.contribution.content}</p>);
	},

	render(){
		//TODO: Implement priority for contributions
		let contribution = this.props.contribution,
			priority = Math.floor(100*Math.random()),
			content = contribution.contributionType === 'text' ? this.getTextContribution() : this.getImageContribution();

		return (
			<li className="list-group-item" >
				<div className="row">
					<div className="col-md-1">
						<button className="btn btn-primary">Like</button>
					</div>
					<div className="col-md-10 col-md-offset-1">
						<h4 className="list-group-item-heading"> <UserLink user={contribution.user} /></h4>
						<h5>Priority: {priority}</h5>
						{content}
					</div>
				</div>
			</li>
		)
	}
});