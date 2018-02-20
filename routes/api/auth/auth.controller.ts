import * as jwt from 'jsonwebtoken';

const User = require('../../../model/user');

exports.login = (req, res) => {
    const { email, password } = req.body;
    const secret = req.app.get('jwt-secret');
    console.log(req.body);
    const check = (user) => {
        if(!user){
            throw new Error('login failed');
        } else {
            console.log(password);
            if(user.verify(password)){
                const p = new Promise((resolve, reject) => {
                    jwt.sign(
                        {
                            _id: user._id,
                            email: user.email,
                        },
                        secret,
                        {
                            expiresIn: '7d',
                            subject: 'userInfo'
                        }, (err, token) => {
                            if(err) reject(err);
                            resolve(token);
                        }
                    );
                });
                return p;
            } else {
                throw new Error('login failed');
            }
        }
    };

    const respond = (token) => {
        res.json({
            statusCode : 200,
            message : 'logged in successfully',
            token
        });
    };

    const onError = (error) => {
        res.status(403).json({
            statusCode : false,
            message : error.message
        });
    };

    User.findOneByUsername(email)
        .then(check)
        .then(respond)
        .catch(onError);
};