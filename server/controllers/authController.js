const User = require('../models/UserModel');
const bcrypt = require('bcrypt.js');
const jwt = require('jsonwebtoken');


const register = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, function(err, hashed){
        if(err) res.json({err: err});
      });

      let user = new User ({
          name: req.body.name,
          password: req.body.password
      })

      user.save()
      .then(user => {
        res.json({
            message: 'User added successfully'})
         })
        .catch(err => {
            res.json({
                message: 'ops Something went wrong'
            })
        })
    
  };

  module.exports = register;