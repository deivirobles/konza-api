const HTTP_STATUS_CODE = require('http-status-codes');

exports.create = (req, res, next) => {
  const { body = {} } = req;
  const doc = body;

  res.status(HTTP_STATUS_CODE.CREATED);
  res.json({
    data: doc,
    success: true,
    statusCode: HTTP_STATUS_CODE.CREATED,
  });
};

exports.all = (req, res, next) => {
  const docs = [];
  res.json({
    data: docs,
    success: true,
    statusCode: HTTP_STATUS_CODE.OK,
  });
};

exports.read = (req, res, next) => {
  const { params = {} } = req;
  const { id } = params;
  const doc = {
    id,
  };
  res.json({
    data: doc,
    success: true,
    statusCode: HTTP_STATUS_CODE.OK,
  });
};

exports.update = (req, res, next) => {
  const { body = {}, params = {} } = req;
  const { id } = params;
  const doc = {
    ...body,
    id,
  };
  res.json({
    data: doc,
    success: true,
    statusCode: HTTP_STATUS_CODE.OK,
  });
};

exports.delete = (req, res, next) => {
  const { params = {} } = req;
  const { id } = params;
  const doc = {
    id,
  };
  res.json({
    data: doc,
    success: true,
    statusCode: HTTP_STATUS_CODE.OK,
  });
};
