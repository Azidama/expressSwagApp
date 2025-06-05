// var express = require('express');
// var router = express.Router();
import { Router } from 'express';
import express from 'express';
const router = express.Router();
/* GET users listing. */
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', function(req, res, next) {
  res.send('User api endpoint');
});

router.get('/:id', function(req, res, next) {
  res.send(`User data requested for User ${req.params.id}`);
});
// module.exports = router;
export { router as usersRouter}
