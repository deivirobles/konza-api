const router = require('express').Router();
const tasks = require('./tasks/routes');

router.route('/tasks').get((req, res, next) => {
  res.json({
    message: 'GET all tasks',
  });
});

router.use('/tasks', tasks);

module.exports = router;
