const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('express').Router();

require('dotenv').config();

//
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once('open', () => {});
router.route('/').get(async (req, res) => {
	try {
		res.json('Connection established');
	} catch (error) {
		res.status(400).json('Error' + error);
	}
});
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {});
