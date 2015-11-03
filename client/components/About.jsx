About = React.createClass({
	
	render(){
		return (
			<div className="about">
				<div className="jumbotron">
					<div className="container-fluid">
						<div className="page-header text-center">
							<h1 className="frontpage">WishE - Crowd something special</h1>
						</div>
					</div>
				</div>
				<h2 className="text-center"><a href="https://docs.google.com/presentation/d/1PEhp5d_aGDRHVIJqf4L2fuVGCdgfF_pQTnSobA7RBoM/edit?usp=sharing">Read more here</a> </h2>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-4">
							<h3>Design For Problems</h3>
							<p>Creating cards presents many challenges with the largest being global constraints: it has to be the right form, right theme, use the right colors, and contain the right special message. Crowdware and crowd wisdom can be used to reduce </p>
						</div>
						<div className="col-md-4">
							<h3>Technology For Solutions</h3>
							<p>Built on Meteor, React.js, MongoDb, and FlowRouter for a modern stack that handles real time updates and provides a responsive UI.</p>
						</div>
						<div className="col-md-4">
							<h3>Research For the Future</h3>
							<p>Creating Cards present an interesting domain for investigating crowdware, actionable feedback, and crowd recruiting.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});