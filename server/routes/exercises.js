// @ts-nocheck
const router = require('express').Router();

let Exercise = require('../models/exercise.modal');

router.route('/').get(async (req, res) => {
	try {
		const response = await Exercise.find();
		res.json(response);
	} catch (error) {
		res.status(400).json('Error' + error);
	}
});

router.route('/:id').get(async (req, res) => {
	try {
		const response = await Exercise.findById(req.params.id);
		res.json(response);
	} catch (error) {
		res.status(400).json('Error' + error);
	}
});

router.route('/:id').delete(async (req, res) => {
	try {
		const response = await Exercise.findByIdAndDelete(req.params.id);
		res.json(response);
	} catch (error) {
		res.status(400).json('Error' + error);
	}
});

router.route('/update/:id').post(async (req, res) => {
	try {
		var response = await Exercise.findById(req.params.id);
		response.username = req.body.username;
		response.description = req.body.description;
		response.duration = Number(req.body.duration);
		response.date = Date.parse(req.body.date);
		const resp = await response.save();

		res.json(resp);
	} catch (error) {
		res.status(400).json('Error' + error);
	}
});

router.route('/add').post(async (req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);
	const newExercise = new Exercise({ username, description, duration, date });

	try {
		const response = await newExercise.save();
		res.status(201).json('User Added' + response);
	} catch (error) {
		res.status(400).json('Error' + error);
	}
});

module.exports = router;
