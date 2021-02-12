const axios = require('axios');
const bodyParser = require('body-parser');

/*
* Define a proxy API to access algolia API
*/
module.exports = function (app) {

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use('/api/v1/search', (req, res) => {
		axios.get('http://hn.algolia.com/api/v1/search', { params: req.query, timeout: 3000 })
			.then(response => {
				res.send(response.data);
			}).catch(err => {
				console.log("ERROR:", err);
				res.send(err);
			})
	});
};