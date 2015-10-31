var userSection = FlowRouter.group({
	prefix: '/users'
});

userSection.route('/:userId', {
	name: 'User Profiles',
	action(params, queryParams){
		RenderMainLayout(<UserProfile {...params}/>)
	}
});