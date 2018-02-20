export {}; // To fix "Cannot redeclare issue"

const User = require('../../../../model/user');

exports.createUserInfo = (req, res) => {
    const { email, password, nickname, gender, height, weight } = req.body;

    const create = (user) => {
        if(user){
            throw new Error('user exists');
        } else {
            const date = new Date();
            User.create(email, password, nickname, gender, height, weight, date, []);
        }
    };

    const respond = () => {
        res.json({
            statusCode : 200,
            message : 'registered successfully'
        });
    };

    const onError = (error) => {
        res.status(409).json({
            result : false,
            message : error.message
        });
    };

    User.findOneByUsername(email)
        .then(create)
        .then(respond)
        .catch(onError);

};

exports.getUserInfo = (req, res) => {
    const decoded = req.decoded;
    const email = decoded.email;

    const respond = (user) => {
        if(!user) new Error('User info not exist');
        res.json({
            email: user.email,
            nickname: user.nickname,
            height: user.height,
            weight: user.weight,
            gender: user.gender
        });
    };

    const onError = (error) => {
        res.status(404).json({
            result : false,
            message : error.message
        });
    };

    User.findOneByUsername(email)
        .then(respond)
        .catch(onError);
};

exports.updateUserInfo = (req, res) => {
    const data = req.body;
    const decoded = req.decoded;
    const email = decoded.email;

    const update = function (user) {

        User.updateUserInfo(email, user, data);
    };

    const respond = function (user) {
        if(!user) new Error('User info not update');
        res.json({
            result : 'ok',
            message : 'User info update'
        })
    };

    const onError = function (err) {
        res.status(403).json({
            message : err.message
        });
    };

    User.findOneByUsername(email)
        .then(update)
        .then(respond)
        .catch(onError);
};

exports.deleteUserInfo = (req, res) => {
    const decoded = req.decoded;
    const email = decoded.email;

    const respond = (user) => {
        if(!user) new Error('User info not exist');
        res.json({
            result: 'ok',
            message: 'user info delete'
        });
    };

    const onError = (error) => {
        res.status(404).json({
            result : false,
            message : error.message
        });
    };

    User.deleteUser(email)
        .then(respond)
        .catch(onError);
};