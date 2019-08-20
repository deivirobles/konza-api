const router = require('express').Router();
const controller = require('./controller');

/*
 * /api/users/ POST - CREATE
 * /api/users/ GET - READ ALL
 * /api/users/:id GET - READ ONE
 * /api/users/:id PUT - UPDATE
 * /api/users/:id DELETE - DELETE
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

module.exports = router;
