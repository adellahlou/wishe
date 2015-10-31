var profileSection  = FlowRouter.group({
	prefix : '/profile'
});


profileSection.route('/',{
	action(params){
		ReactLayout.render(MainLayout, { 
			header: Header,
			content: <UserProfile {...params}/>,
			footer: Footer
		});
	}
});


profileSection.route('/my-cards',{
	name: "My Cards",
	action(params){
		ReactLayout.render(ManyCardsLayout);
	}
})


profileSection.route('/my-contributions',{
	name: "My Contributions",
	action(params){
		ReactLayout.render(ManyCardsLayout, {
		});
	}
})

