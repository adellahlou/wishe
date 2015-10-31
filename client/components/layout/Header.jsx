Header = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			currentUser : Meteor.user()
		};
	},

	handleLogout(e){
		e.preventDefault();
		Meteor.logout();
	},

	render(){
		let rightBar;

		if(this.data.currentUser){
			let userLink = GenRoute.user(this.data.currentUser._id);

			rightBar = [
				(<li key="1"><a href={userLink}>My Profile</a> </li>),
				(<li key="2"><a href="/" onClick={this.handleLogout}>Signout</a> </li>)];
		} else {
			rightBar = (<UserLogin />)/*[
				(<li key="1"><a href="/login">Login</a> </li>),
				(<li key="2"><a href="/signup">Signup</a> </li>)]*/;
		}

		return (
			<nav className="navbar navbar-default navbar-fixed-top">
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <a className="navbar-brand" href="#">WishE</a>
		        </div>
		        <div id="navbar" className="navbar-collapse collapse">
		          <ul className="nav navbar-nav">
		            <li className="active"><a href="#">Home</a></li>
		            <li><a href='/crowdsearch'>Crowd Search</a></li>
		            <li><a href="/cards">Cards</a></li>
		            <li><a href="#contact">Contact</a></li>
		            <li className="dropdown">
		              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Learn More <span className="caret"></span></a>
		              <ul className="dropdown-menu">
		                <li><a href="#">Motivation</a></li>
		                <li><a href="#">Approaches</a></li>
		                <li><a href="#">Deliverables</a></li>
		              </ul>
		            </li>
		          </ul>
		          <ul className="nav navbar-nav navbar-right">
		            <li><a href="../navbar/">About</a></li>
		            <li><a href="../navbar-static-top/">The Team</a></li>
		            {rightBar}

		          </ul>
		        </div>
		      </div>
		    </nav>
		);
	}
});