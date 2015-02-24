var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.signup = function(req, res) {
	var _user = req.body.user;

	User.findOne({
		name: _user.name
	}, function(err, user) {
		if (err) {
			console.log(err);
		}

		if (user) {
			return res.redirect('/signin');
		} else {
			user = new User(_user);
			user.save(function(err, user) {
				if (err) {
					console.log(err);
				}

				res.redirect('/');
			});
		}
	});
};
