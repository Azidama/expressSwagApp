// var express = require('express');
// var router = express.Router();
import { Router } from 'express';
import express from 'express';
import { usersRouter } from './users.js';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/users', usersRouter);

export { router as indexRouter }
// module.exports = router;
