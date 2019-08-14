const HTTP_STATUS_CODE = require('http-status-codes');

const Model = require('./model');

exports.id = (req, res, next, id) => {
  Model.findById(id).exec((err, doc) => {
    if (err) {
      next(err);
    } else if (doc) {
      req.doc = doc;
      next();
    } else {
      next({
        message: 'Resource not found',
        statusCode: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }
  });
};

exports.create = (req, res, next) => {
  const { body = {} } = req;
  Model.create(body, (err, doc) => {
    if (err) {
      next(err);
    } else {
      res.status(HTTP_STATUS_CODE.CREATED);
      res.json({
        data: doc,
        success: true,
        statusCode: HTTP_STATUS_CODE.CREATED,
      });
    }
  });
};

exports.all = (req, res, next) => {
  Model.find().exec((err, docs) => {
    if (err) {
      next(err);
    } else {
      res.json({
        data: docs,
        success: true,
        statusCode: HTTP_STATUS_CODE.OK,
      });
    }
  });
};

exports.read = (req, res, next) => {
  const { doc } = req;
  res.json({
    data: doc,
    success: true,
    statusCode: HTTP_STATUS_CODE.OK,
  });
};

exports.update = (req, res, next) => {
  const { body = {}, doc } = req;
  Object.assign(doc, body);
  doc.save((err, updated) => {
    if (err) {
      next(err);
    } else {
      res.json({
        data: updated,
        success: true,
        statusCode: HTTP_STATUS_CODE.OK,
      });
    }
  });
};

exports.delete = (req, res, next) => {
  const { doc } = req;
  doc.remove((err, deleted) => {
    if (err) {
      next(err);
    } else {
      res.json({
        data: deleted,
        success: true,
        statusCode: HTTP_STATUS_CODE.OK,
      });
    }
  });
};
