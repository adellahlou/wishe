UserProfile = React.createClass({
	propType : {
		userId : React.PropTypes.string.isRequired,
	},

	mixins : [ReactMeteorData],

	getMeteorData(){
		var data = {};
		var handle = Meteor.subscribe('user-profile', Meteor.userId());

		if(handle.ready()){
			data.profile = {};
		}

		return data;
	},

	getProfileContent(){
		let user = this.data.currentUser;

		return (
			<div className="col-lg-6 col-sm-6">
			    <div className="blocky hoverblocky">
			        <div className="blocky-background">
			            <img className="blocky-bkimg" alt="" src="http://lorempixel.com/100/100/people/9/" />
			        </div>
			        <div className="useravatar">
			            <img alt="" src="http://lorempixel.com/100/100/people/9/" />
			        </div>
			        <div className="blocky-info"> 
			        	<span className="blocky-title">{user.username}</span>
			        </div>
			    </div>

			    <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
			        <div className="btn-group" role="group">
			            <button type="button" id="stars" className="btn btn-primary" href="#cardsTab" data-toggle="tab"><span className="glyphicon glyphicon-book" aria-hidden="true"></span>
			                <div className="hidden-xs">Cards</div>
			            </button>
			        </div>
			        <div className="btn-group" role="group">
			            <button type="button" id="favorites" className="btn btn-default" href="#searchesTab" data-toggle="tab"><span className="glyphicon glyphicon-search" aria-hidden="true"></span>
			                <div className="hidden-xs">Searches</div>
			            </button>
			        </div>
			        <div className="btn-group" role="group">
			            <button type="button" id="following" className="btn btn-default" href="#contributionsTab" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
			                <div className="hidden-xs">Contributions</div>
			            </button>
			        </div>
			    </div>

				{/*TAB CONTROLLER*/}
			    <div className="well">
			      <div className="tab-content">
			        <div className="tab-pane fade in active" id="cardsTab">
			          <h3>Cards</h3>
			        </div>
			        <div className="tab-pane fade in" id="searchesTab">
			          <h3>Searches</h3>
			        </div>
			        <div className="tab-pane fade in" id="contributionsTab">
			          <h3>Contributions</h3>
			        </div>
			      </div>
			    </div>
			    
			</div>
		);
	},


	render(){
		
         return(
         	this.data.profile ? getProfileContent() : (<LoadingSpinner> Loading Profile</LoadingSpinner>)
		);
	},
})