CardImage = React.createClass({
	propTypes : {
		card : React.PropTypes.object.isRequired
	},

	render(){
		let card = this.props.card;		
		let imgSrc = (card.art && card.art.length > 0) ? 
			card.art[0].imageId : imgSrc = "http://lorempixel.com/240/160";

		return (<img src={imgSrc} alt={card.description} />);
	}
});