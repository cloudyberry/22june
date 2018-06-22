Template.search.rendered = function() {
	$("#search-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#rankings-link").removeClass('selected');
	$("#reviews-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.search.helpers({
	inputAttributes: function() {
		return { 'class': 'easy-search-input', 'placeholder': 'Start Searching' };
	},
	players: function() {
		return Reviews.find({}, { sort: { createdAt: -1 } });
	},
	selectedName: function() {
		var review = ReviewsIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedJoke") });
		return review && review.reviewName;
	},
	index: function () {
		return ReviewsIndex;
	},
	resultsCount: function() {
		return ReviewsIndex.getComponentDict().get('count');
	},
	showMore: function() {
		return false;
	},

	renderTmpl: () => Template.renderTemplate

});
//returning a session that is selected
//checks if it is selected or empty
Template.User.helpers({
	selected: function() {
		return Session.equals("selectedReview", this.__originalId) ? "selected" : '';
	},
});

Template.User.events({
	'click': function() {
		Session.set("selectedReview", this.__originalId);
	}
});
