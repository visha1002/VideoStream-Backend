// wrapper function that will be used everywhere
// one method is try-catch

/* const asyncHandler = (fun) => async (req, res, next) => {
  try {
    await fun(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      sucess: false,
      message: err.message,
    });
  }
}; */

// another method to create that function is using promise

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
