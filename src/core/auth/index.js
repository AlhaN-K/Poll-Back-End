const jwt = require("jsonwebtoken");
const { jwt: jwt_config } = require("../../config");
class AuthenticationManager {
  static getJwtToken(payload) {
    const expirySeconds = Number(jwt_config.expirySeconds);
    const token = jwt.sign(payload, jwt_config.secret, {
      algorithm: "ES256",
      expiresIn: expirySeconds,
    });
    return {
      token,
      expirySeconds,
    };
  }
}

module.exports = AuthenticationManager;
