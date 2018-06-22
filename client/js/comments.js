Template.comments.helpers({
	nonAdmin: function() {
			var adminId = Meteor.users.findOne({username: 'Admin'})._id;
			var userId = Meteor.userId();
			if (userId !== adminId) {
			return true;
			}
		},

    comms: function() {
      var comms = Comments.find({});
      return comms;
    },
});
