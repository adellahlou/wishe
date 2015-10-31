FlowRouter.route('/login',{
	name: "Login",
	action(params){
		renderMainLayout(<UserLogin />);
	}
});


FlowRouter.route('/logout',{
	name: "Logout",
	action(params){
		renderMainLayout(<UserLogout />);
	}
});


FlowRouter.route('/signup',{
	name: "Signup",
	action(params){
		renderMainLayout(<UserSignup />);
	}
});