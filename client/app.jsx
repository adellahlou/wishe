Meteor.startup(()=> {
  // CardSubs = new SubsManager();
  Meteor.subscribe('searches');
});