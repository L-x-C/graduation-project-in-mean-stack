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

exports.login = function(req, res) {
	var _user = req.body.user;
	var name = _user.name;
	var password = _user.password;

	User.findOne({
		name: name
	}, function(err, user) {
		if (err) {
			console.log(err);
		}

		if (!user) {
			return res.redirect('/signup');
		}

		user.comparePassword(password, function(err, isMatch) {
			if (err) {
				console.log(err);
			}

			if (isMatch) {
				// req.session.user = user;
				var jUser = JSON.stringify(user);
				res.cookie('user', jUser);
				return res.redirect('/');
			} else {
				return res.redirect('/login');
			}
		});
	});
};

exports.logData = function(req,res) {

}