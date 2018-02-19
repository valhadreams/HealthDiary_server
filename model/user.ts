import * as mongoose from 'mongoose';
import * as crypto from 'crypto';

const config = require('../config');
const Schema = mongoose.Schema;

const User = new Schema({
    userId : String,
    password : String,
    email : String,
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

User.statics.create = function (userId, password, email, gender, height, weight, regist_date, events) {
    const encrypted = crypto.createHmac('sha1', config.secret)
        .update(password)
        .digest('base64');
    console.log(userId);
    const user = new this({
        userId,
        password : encrypted,
        email,
        gender,
        height,
        weight,
        regist_date,
        events
    });

    return user.save();
};

User.statics.updateUserInfo = function (userId, originData, newData) {
    if (newData.password === ''){
        newData.password = originData.password;
    }else {
        console.log(newData.password);
        newData.password = crypto.createHmac('sha1', config.secret)
            .update(newData.password)
            .digest('base64');
    }
    if(newData.email === '') newData.email = originData.email;
    if(newData.height === '') newData.height = originData.height;
    if(newData.weight === '') newData.weight = originData.weight;
    if(newData.gender === '') newData.gender = originData.gender;
    console.log(newData.password);
    return this.update(
        { 'userId' : userId }, { $set: {
            password: newData.password,
            email: newData.email,
            height: newData.height,
            weight: newData.weight,
            gender: newData.gender
        }},
        function (err, model) {
            console.log(model);
        }
    );
};

User.statics.deleteUser = function (userId) {
    console.log(userId);
    return this.findOneAndRemove({ userId: userId });
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
    return this.update({ 'userId' : userId }, { $pull: { events :  {'events.date' : events.date }}});
};

User.statics.getEvents = function (userId) {
    return this.findOne({ userId }, 'events').exec();
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

    console.log(this.password);
    console.log(encrypted);
    return this.password === encrypted;
};

module.exports = mongoose.model('User', User);