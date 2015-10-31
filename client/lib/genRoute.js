GenRoute = {
	card(cardId, action, queryParams){
		let params = {
			cardId: cardId,
			action: action || 'view'
		};

		return FlowRouter.path('/cards/:cardId/:', params, queryParams);
	},

	user(userId, action, queryParams){
		let params = {
			userId: userId,
		};

		return FlowRouter.path('/users/:userId', params, queryParams);
	},

	cardList(listId, action, queryParams){
		let params = {
			listId: searchId,
		};

		return FlowRouter.path('/cards/list/:listId', params, queryParams);
	},

	search(searchId, action, queryParams){
		let params = {
			searchId: searchId,
		};

		return FlowRouter.path('/crowdsearch/:searchId', params, queryParams);
	}
}