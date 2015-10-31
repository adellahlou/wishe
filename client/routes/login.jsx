FlowRouter.route('/login',{
	name: "Login",
	action(params){
		renderMainLayout(<Home />);
	}
});


FlowRouter.route('/logout',{
	name: "Logout",
	action(params){
		Meteor.logout(function(err){
			if(err)
				console.log(err);
			else
				renderMainLayout(<Home />);
		});	
	}
});


FlowRouter.route('/signup',{
	name: "Signup",
	action(params){
		renderMainLayout(<UserSignup />);
	}
});



function renderMainLayout(component){
	ReactLayout.render(MainLayout, {
		header: <Header />,
		content: component,
		footer: <Footer />
	});
}