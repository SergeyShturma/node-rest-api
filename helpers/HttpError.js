const errorMesage = {
  400: "Bad Request",
  401: "Not authorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const HttpError = (status, message = errorMesage[status]) => {
  const error = new Error(message);

  error.status = status;
  return error;
};

module.exports = HttpError;
