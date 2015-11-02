ContributionTile = React.createClass({
	propTypes : {
		contribution : React.PropTypes.object.isRequired
	},

	getImageContribution(){
		return  (<img src="http://lorempixel.com/240/160" />);
	},
	getTextContribution(){
		let content = Autolinker.link(this.props.contribution.content)
		return  (<p>{content}</p>);
	},

	render(){
		let contribution = this.props.contribution;	
		console.log(contribution);

		let content = contribution.contributionType === 'text' ? this.getTextContribution() : this.getImageContribution();///
		return (
			<li className="list-group-item" >
				<h4 className="list-group-item-heading"> <UserLink user={contribution.user} /></h4>
				<p className="list-group-item-text">{content}</p>
			</li>
		)
	}
});