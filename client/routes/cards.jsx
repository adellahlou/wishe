var cardSection = FlowRouter.group({
	prefix: '/cards'
});

cardSection.route('/', {
	name: "Browse Cards",
	action(params, queryParams){
		RenderMainLayout(<CardsHome {...params}/>);
	}
});


cardSection.route('/:cardid/make', {
	name : "Make Card",
	action(){
		// ReactLayout.render(CardLayout, ...params);
	}
});



cardSection.route('/:cardid/view', {
	name : "View Card",
	action(){
		RenderMainLayout(<CardProfile {...params}/>);
	}
});

