export {}; // To fix "Cannot redeclare issue"

const User = require('../../../../model/user');

exports.getEvents = (req, res) => {
    const decoded = req.decoded;
    const email = decoded.email;

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

    User.getEvents(email)
        .then(respond)
        .catch(onError);
};

exports.addEvents = (req, res) => {
    const { data } = req.body;
    const decoded = req.decoded;
    const email = decoded.email;
    console.log(data);
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

    User.addEvents(email, data)
        .then(respond)
        .catch(onError);
};

exports.updateEvents = (req, res) => {
    const { data } = req.body;
    const decoded = req.decoded;
    const email = decoded.email;

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
        User.deleteEvents(email, data)
            .then(respond)
            .catch(onError);
    } else {
        User.updateEvents(email, data)
            .then(respond)
            .catch(onError);
    }
};