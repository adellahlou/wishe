FlowRouter.route('/', {
	name: "Home",
	action(params){
		renderMainLayout(<Home {...params}/>);
	}
});


FlowRouter.route('/about', {
	name: "About",
	action(params){
		renderMainLayout(<About {...params}/>);
	}
});


FlowRouter.route('/team', {
	name: "The Team",
	action(params){
		renderMainLayout(<Team {...params}/>);
	}
});



function renderMainLayout(component){
	ReactLayout.render(MainLayout, {
		header: <Header/>
		content: component,
		footer: <Footer />
	})
}