import * as jwt from 'jsonwebtoken';

const User = require('../../../model/user');

// exports.signup = (req, res) => {
//     const { id, password, email, gender, height, weight } = req.body;
//
//     const create = (user) => {
//         if(user){
//             throw new Error('user exists');
//         } else {
//             const date = new Date();
//             User.create(id, password, email, gender, height, weight, date, []);
//         }
//     };
//
//     const respond = () => {
//         res.json({
//             result : true,
//             message : 'registered successfully'
//         });
//     };
//
//     const onError = (error) => {
//         res.status(409).json({
//             result : false,
//             message : error.message
//         });
//     };
//
//     User.findOneByUsername(id)
//         .then(create)
//         .then(respond)
//         .catch(onError);
//
// };

exports.login = (req, res) => {
    const { id, password } = req.body;
    const secret = req.app.get('jwt-secret');

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
                            userId: user.userId,
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
            result : true,
            message : 'logged in successfully',
            token
        });
    };

    const onError = (error) => {
        res.status(403).json({
            result : false,
            message : error.message
        });
    };

    User.findOneByUsername(id)
        .then(check)
        .then(respond)
        .catch(onError);
};