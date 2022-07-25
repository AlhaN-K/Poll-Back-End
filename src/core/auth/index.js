const jwt = require("jsonwebtoken");
const { jwt: jwt_config } = require("../../config");

class AuthenticationManager {
  static getJwtToken(payload) {
    const expirySeconds = Number(jwt_config.expirySeconds);
    console.log("payload :>> ", payload);
    const token = jwt.sign(payload, jwt_config.secret, {
      algorithm: "HS256",
      expiresIn: expirySeconds,
    });
    return {
      token,
      expirySeconds,
    };
  }
  static getJwtTokenPayload(token) {
    return jwt.verify(token, jwt_config.secret);
  }
}

module.exports = AuthenticationManager;
