const news = require('../model/data.js');

const GET = (_, res) => {
	res.render('main', news);
};

module.exports.GET = GET;
