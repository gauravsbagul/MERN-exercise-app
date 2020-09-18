const router = require('express').Router();

let User = require('../models/user.modal');

router.route('/').get(async (req, res) => {
	try {
		const response = await User.find();
		res.json(response);
	} catch (error) {
		res.status(400).json('Error' + error);
	}
});

router.route('/add').post(async (req, res) => {
	const username = req.body.username;

	const newUser = new User({ username });

	try {
		const response = await newUser.save();
		res.status(201).json('User Added' + response);
	} catch (error) {
		res.status(400).json('Error' + error);
	}
});

module.exports = router;
