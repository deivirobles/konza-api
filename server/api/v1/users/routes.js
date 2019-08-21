const router = require('express').Router();
const controller = require('./controller');
const tasksRouter = require('./../tasks/routes');

/*
 * /api/users/ POST - CREATE
 * /api/users/ GET - READ ALL
 * /api/users/:id GET - READ ONE
 * /api/users/:id PUT - UPDATE
 * /api/users/:id DELETE - DELETE
 */

router.param('id', controller.id);

router.route('/signup').post(controller.signup);
router.route('/signin').post(controller.signin);

router.route('/').get(controller.all);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

router.use('/:userId/tasks', tasksRouter);

module.exports = router;
