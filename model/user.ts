import * as mongoose from 'mongoose';
import * as crypto from 'crypto';

const config = require('../config');
const Schema = mongoose.Schema;

const User = new Schema({
    userId : String,
    password : String,
    email : String,
    gender : String,
    tall : Number,
    weight : Number,
    regist_date : Date,
    events : [
        {
            date: Date,
            event: [
                {
                    _id : false,
                    what: String,
                    time: String
                }
            ]
        }
    ]
});

User.statics.create = function (userId, password, email, sex, tall, weight, regist_date, events) {
    const encrypted = crypto.createHmac('sha1', config.secret)
        .update(password)
        .digest('base64');
    console.log(userId);
    const user = new this({
        userId,
        password : encrypted,
        email,
        sex,
        tall,
        weight,
        regist_date,
        events
    });

    return user.save();
};

User.statics.addEvents = function (userId, events) {
    return this.findOneAndUpdate(
        { userId : userId }, { $push: { "events" : events }}, { new : true }
    );
};

User.statics.updateEvents = function (userId, events) {
    console.log('update db');
    return this.update(
        { 'userId' : userId, 'events.date' : events.date }, { $set: { "events.$.event" : events.event }},
        function (err, model) {
            console.log(err);
            console.log(model);
        }
    );
};

User.statics.deleteEvents = function (userId, events) {
    console.log('delete db');
    return this.update({ 'userId' : userId }, { $pull: { events :  {'events.date' : events.date });
};

User.statics.findOneByUsername = function (userId) {
    return this.findOne({
        userId
    }).exec();
};

User.methods.verify = function (password) {
    const encrypted = crypto.createHmac('sha1', config.secret)
        .update(password)
        .digest('base64');

    return this.password === encrypted;
};

module.exports = mongoose.model('User', User);