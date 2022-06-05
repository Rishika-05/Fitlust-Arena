const Plan = require('../models/Plan');
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'teamfitlust@yahoo.com',
        pass: 'lxfpdhbovmdsyatp'
    }
});

module.exports.createPlan = (req, res, next) => {
    var planObject = req.body;
    console.log(planObject);
    const plan = new Plan(planObject);
    const {email,name} = req.body;
    var mailOptions = {
        from: 'teamfitlust@yahoo.com',
        to: email,
        subject: "Custom Diet and workout plan - FITLUST",
        html:{path:'./mail/beefree-dbbjfimd35j.html'},
    }
    
    plan.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Try again later.", status: 500 });
        } else {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.status(500).send({ message: "Try again later.", status: 500 });
                }
                else {
                    res.status(200).send({ message: "Details recieved, we'll reach you soon", status: 200, done: 1, detail: info });
                    console.log(info);
                } 
            })
        }
    })
}
