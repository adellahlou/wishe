var searchSection = FlowRouter.group({
	prefix: '/crowdsearch'
});



searchSection.route('/',{
	name: "CrowdSearch Home",
	action(params, queryParams){

	}
});


searchSection.route('/:searchid', {
	name: "Search Instance",
	action(params, queryParams){
		
	}
})