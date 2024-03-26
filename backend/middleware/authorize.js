const { expressjwt: expressjwt } = require("express-jwt");
require('dotenv').config('../.env');

function authorize(role) {
  return [
        expressjwt({ secret: process.env.JWT_KEY,algorithms: ['HS256'] }),
        (req, res, next) => {
          if (role !== req.auth.role) {
            console.log('you are not authorized')
            return res.status(401).json({ message: 'Unauthorized' });
          }
            console.log('you are authorzed')
            next();
        }
  ]
}

module.exports={authorize}