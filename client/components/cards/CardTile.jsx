CardTile = React.createClass({
	propTypes : {
		card : React.PropTypes.object.isRequired
	},

	render(){
		let card = this.props.card;		
		let imgSrc = (card.art && card.art.length > 0) ? 
			card.art[0].imageId : imgSrc = "http://lorempixel.com/240/160";

		//TODO - Check if img can be not first child of class thumbnail and still be formatted

		return (
			<div className="col-sm-6 col-md-4"> 
				<div className="thumbnail">
					<CardLink card={card}>
						<CardImage card={card} />
					</CardLink>
					<div className="caption">
						<h3><CardLink card={card}/></h3>
						<h4> <UserLink user={card.owner} /></h4>
						<p className="cardDescription">{card.description}</p>
					</div>
				</div>
			</div>
		)
	}
});