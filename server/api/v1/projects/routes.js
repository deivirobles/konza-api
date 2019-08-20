const router = require('express').Router();
const controller = require('./controller');
const tasksRouter = require('./../tasks/routes');

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
  .post(controller.create)
  .get(controller.all);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

router.use('/:projectId/tasks', tasksRouter);

module.exports = router;
