const router = require('express').Router();
const controller = require('./controller');
const tasksRouter = require('./../tasks/routes');
const { auth } = require('./../auth');

/*
 * /api/projects/ POST - CREATE
 * /api/projects/ GET - READ ALL
 * /api/projects/:id GET - READ ONE
 * /api/projects/:id PUT - UPDATE
 * /api/projects/:id DELETE - DELETE
 */

router.param('id', controller.id);

router
  .route('/')
  .post(auth, controller.create)
  .get(auth, controller.all);

router
  .route('/:id')
  .get(auth, controller.read)
  .put(auth, controller.update)
  .delete(auth, controller.delete);

router.use('/:projectId/tasks', tasksRouter);

module.exports = router;
