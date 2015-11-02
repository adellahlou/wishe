CardTileList = React.createClass({
	propTypes : {
		source : React.PropTypes.oneOf(['cardsList', 'userCards']).isRequired,
		resourceId : React.PropTypes.string
	},

	mixins : [ReactMeteorData],


	getMeteorData(data){
		var data = {};
		let subscriptionMethod = this.props.source === 'cardsList' ?
			'singleCardList' :
			'userCardList';
		var handle = Meteor.subscribe(subscriptionMethod, this.props.resourceId);

		if (handle.ready()){
			data.cards = Cards.find({});
		}

		return data;
	},

	render(){
		let display = !this.data.cards ? 
			(<div class="alert alert-danger" role="alert"> 
				<span class="glyphicon glyphicon-alert"></span>
					Cards List could not be display :(
			</div>) : 
			this.data.cards.map(function(card){
				return (
					<CardTile card={card} />
				);
			});



		return (
			<div className="list tile-list list-card"> 
				<div className="row">
					{display}
				</div>
			</div>
		);
	}
});