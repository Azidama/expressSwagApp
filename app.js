// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { indexRouter } from './routes/index.js';
import { usersRouter } from './routes/users.js';
import { join, dirname } from 'path'
import { fileURLToPath } from 'url';
import swaggerUiExpress from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
});
export { app }
// module.exports = app;
