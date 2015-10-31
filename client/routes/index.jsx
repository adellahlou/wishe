FlowRouter.route('/', {
	name: "Home",
	action(params, queryParams){
		RenderMainLayout(<Home />);
	}
});


FlowRouter.route('/about', {
	name: "About",
	action(params){
		RenderMainLayout(<About />);
	}
});


FlowRouter.route('/team', {
	name: "The Team",
	action(params){
		RenderMainLayout(<Team />);
	}
});



RenderMainLayout = function(component){
	ReactLayout.render(MainLayout, {
		header: <Header />,
		content: component,
		footer: <Footer />
	});
}