var nodemailer = require('nodemailer');
var tranport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'testcafe.abhi@gmail.com',
        pass: 'Ab@123456'
    }
});

var mailOption = {
    from: 'testcafe.abhi@gmail.com',
    to: 'abhisparihar3@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy',
    attachments:[{
        file: 'demo.txt',
        content:'E:\HTML\Node-Js\13-09-2021\test'
    }]
};

tranport.sendMail(mailOption,function(error,info){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('Email sent'+info.response);
    }
});