export default function errorHandler(err, req, res, next) {
    console.error("Unhandled error:", err.stack || err.message);
    res.status(500).send("Something went wrong.");
  }
  