import jwt from "jsonwebtoken";

const verifyTokenFromCookies = (req, res, next) => {
  // Get the token from cookies
  const token = req.cookies.accessToken;

  // Check if the token is present
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  // Verify and decode the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Unauthorized or Invalid Token!" });
    }

    // Attach decoded data (e.g., user info) to req
    req.user = decoded;
    next();
  });
};

export { verifyTokenFromCookies };
