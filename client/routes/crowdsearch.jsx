var searchSection = FlowRouter.group({
	prefix: '/crowdsearch'
});



searchSection.route('/',{
	name: "CrowdSearch Home",
	action(params, queryParams){
		RenderMainLayout(<SearchHome {...params}/>);
	}
});


searchSection.route('/:searchId', {
	name: "Search Instance",
	action(params, queryParams){
		RenderMainLayout(<SearchProfile {...params}/>);
	}
})