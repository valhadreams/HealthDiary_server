import * as mongoose from 'mongoose';
import * as crypto from 'crypto';

const config = require('../config');
const Schema = mongoose.Schema;

const User = new Schema({
    email : String,
    password : String,
    nickname : String,
    gender : String,
    height : Number,
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

User.statics.create = function (email, password, nickname, gender, height, weight, regist_date, events) {
    const encrypted = crypto.createHmac('sha1', config.secret)
        .update(password)
        .digest('base64');

    const user = new this({
        email,
        password : encrypted,
        nickname,
        gender,
        height,
        weight,
        regist_date,
        events
    });

    return user.save();
};

User.statics.updateUserInfo = function (email, originData, newData) {
    if (newData.password === ''){
        newData.password = originData.password;
    }else {
        newData.password = crypto.createHmac('sha1', config.secret)
            .update(newData.password)
            .digest('base64');
    }
    if(newData.nickname === '') newData.nickname = originData.nickname;
    if(newData.height === '') newData.height = originData.height;
    if(newData.weight === '') newData.weight = originData.weight;
    if(newData.gender === '') newData.gender = originData.gender;

    return this.update(
        { 'email' : email }, { $set: {
            password: newData.password,
            nickname: newData.nickname,
            height: newData.height,
            weight: newData.weight,
            gender: newData.gender
        }},
        function (err, model) {
            console.log(model);
        }
    );
};

User.statics.deleteUser = function (email) {
    return this.findOneAndRemove({ email: email });
};

User.statics.addEvents = function (email, events) {
    return this.findOneAndUpdate(
        { email : email }, { $push: { "events" : events }}, { new : true }
    );
};

User.statics.updateEvents = function (email, events) {
    console.log('update db');
    return this.update(
        { 'email' : email, 'events.date' : events.date }, { $set: { "events.$.event" : events.event }},
        function (err, model) {
            console.log(err);
            console.log(model);
        }
    );
};

User.statics.deleteEvents = function (email, events) {
    console.log('delete db');
    return this.update({ 'email' : email }, { $pull: { events :  {'events.date' : events.date }}});
};

User.statics.getEvents = function (email) {
    return this.findOne({ email }, 'events').exec();
};

User.statics.findOneByUsername = function (email) {
    return this.findOne({
        email
    }).exec();
};

User.methods.verify = function (password) {
    const encrypted = crypto.createHmac('sha1', config.secret)
        .update(password)
        .digest('base64');

    return this.password === encrypted;
};

module.exports = mongoose.model('User', User);