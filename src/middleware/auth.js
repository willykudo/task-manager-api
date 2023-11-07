const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decode._id, "tokens.token": token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).send({ error: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).send({ error: "Token expired" });
    }
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
