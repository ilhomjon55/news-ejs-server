const news = require('../model/data.js');

const GET = (req, res) => {
	const { id } = req.params;
	const found = news.news.find((item) => item.id === Number(id));

	if (found) {
		res.render('post', found);
	} else {
		res.statusCode = '404';
		res.render('error');
	}
};

module.exports.GET = GET;
