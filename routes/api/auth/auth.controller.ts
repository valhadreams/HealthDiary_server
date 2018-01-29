import * as jwt from 'jsonwebtoken';

const User = require('../../../model/user');

exports.signup = (req, res) => {
    const { id, password, email, sex, tall, weight } = req.body;

    const create = (user) => {
        if(user){
            throw new Error('user exists');
        } else {
            const date = new Date();
            User.create(id, password, email, sex, tall, weight, date, []);
        }
    };

    const respond = () => {
        res.json({
            result : true,
            message : 'registered successfully'
        });
    };

    const onError = (error) => {
        res.status(409).json({
            result : false,
            message : error.message
        });
    };

    User.findOneByUsername(id)
        .then(create)
        .then(respond)
        .catch(onError);

};

exports.login = (req, res) => {
    const { id, password } = req.body;
    const secret = req.app.get('jwt-secret');

    const check = (user) => {
        if(!user){
            throw new Error('login failed');
        } else {
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

exports.getEvents = (req, res) => {
    const decoded = req.decoded;
    console.log(decoded);
    const userId = decoded.userId;

    const respond = (user) => {
        if(!user) throw new Error('user not existed');
        res.json({
            result : user.events,
            message : 'get events successfully'
        });
    };

    const onError = () => {
        res.status(404).json({
            result : false
        });
    };

    User.findOneByUsername(userId)
        .then(respond)
        .catch(onError);
};

exports.addEvents = (req, res) => {
    const { data } = req.body;
    const decoded = req.decoded;
    const userId = decoded.userId;

    const respond = (user) => {
        res.json({
            result : user,
            message : 'add events successfully'
        });
    };

    const onError = () => {
        res.status(403).json({
            result : false
        });
    };

    User.addEvents(userId, data)
        .then(respond)
        .catch(onError);
};

exports.updateEvents = (req, res) => {
    const { data } = req.body;
    const decoded = req.decoded;
    const userId = decoded.userId;
    console.log(data);
    const respond = (user) => {
        res.json({
            result : user,
            message : 'update events successfully'
        });
    };

    const onError = () => {
        res.status(403).json({
            result : false
        });
    };

    if(data.event === null){
        User.deleteEvents(userId, data)
            .then(respond)
            .catch(onError);
    } else {
        User.updateEvents(userId, data)
            .then(respond)
            .catch(onError);
    }
};

exports.check = (req, res) => {
    res.json({
        success: true,
        info: req.decoded
    });
};