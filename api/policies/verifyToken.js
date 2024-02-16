var jwt = require("jsonwebtoken");

module.exports = async function (req,res,next) {
  const token = require.body.authorization;

  if (!token) {
    return res.forbidden({ error: "token not valid" });
  }

try {
  const decode = jwt.verify(token, "secret-key");

  req.token = decode;

    return next();
    
} catch (error) {
  return res.forbidden({ error: "Invalid token" });
}
};

