var hits = 0;
exports.count = function(req, res) {
	res.send(200, {
		hits: hits
	});
};
exports.registerNew = function(req, res) {
	hits++;
	res.send(200, {
		hits: hits
	});
};