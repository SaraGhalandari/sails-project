module.exports = {
  generateToken(id) {
    const option = { expiresIn: "1h" };
    payload = { id: id };
    return jwt.sign(payload, jwtSecret, option);
  },
};
