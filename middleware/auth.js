import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'
  console.log("Extracted Token:", token);

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", token_decode);

    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ success: false, message: 'Failed to authenticate token' });
  }
};

export default authMiddleware;
