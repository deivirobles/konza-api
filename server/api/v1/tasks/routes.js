const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'GET all tasks',
  });
});

module.exports = router;
