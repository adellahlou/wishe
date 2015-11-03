CardTileList = React.createClass({
	propTypes : {
		cardListId : React.PropTypes.string
	},

	mixins : [ReactMeteorData],


	getMeteorData(data){
		var data = {};
		var handle = Meteor.subscribe('cardsList', this.props.cardListId);

		if (handle.ready()){
			data.cards = Cards.find({});
		}

		return data;
	},

	getErrorMessage(){
		return (
			<div className="alert alert-danger" role="alert"> 
				<span className="glyphicon glyphicon-alert"></span>
					&nbsp;Card List could not be displayed :(
			</div>
		);
	},

	getList(){
		return this.data.cards.map(function(card) {
				return (
					<CardTile key={card._id} search={card} />
				);
			});
	},

	render(){
		let display = this.data.cards ? this.getList() : this.getErrorMessage()

		return (
			<div className="list tile-list list-card"> 
				<div className="row">
					{display}
				</div>
			</div>
		);
	}
});