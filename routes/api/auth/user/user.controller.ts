const User = require('../../../../model/user');

exports.getUserInfo = (req, res) => {
    const decoded = req.decoded;
    const userId = decoded.userId;

    const respond = (user) => {
        if(!user) new Error('User info not exist');
        res.json({
            userId: user.userId,
            email: user.email,
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

    User.findOneByUsername(userId)
        .then(respond)
        .catch(onError);
};

exports.updateUserInfo = (req, res) => {
    const data = req.body;
    const decoded = req.decoded;
    const userId = decoded.userId;

    const update = function (user) {

        User.updateUserInfo(userId, user, data);
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

    User.findOneByUsername(userId)
        .then(update)
        .then(respond)
        .catch(onError);
};

exports.deleteUserInfo = (req, res) => {
    const decoded = req.decoded;
    const userId = decoded.userId;

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

    User.deleteUser(userId)
        .then(respond)
        .catch(onError);
};