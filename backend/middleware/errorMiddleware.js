// middleware/errorMiddleware.js

// ================= NOT FOUND =================
const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`Route not found - ${req.originalUrl}`);
  next(error);
};

// ================= GLOBAL ERROR HANDLER =================
const errorHandler = (err, req, res, next) => {
  console.error("❌ Global Error:", err.message);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };