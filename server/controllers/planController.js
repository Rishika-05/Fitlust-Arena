const Plan = require('../models/Plan');
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'btech10384@bitmesra.ac.in',
        pass: ''
    }
});

module.exports.createPlan = (req, res, next) => {
    var planObject = req.body;
    const plan = new Plan(planObject);
    const {email} = req.body;
    var mailOptions = {
        from: 'team.space.793@gmail.com',
        to: email,
        subject: "Space Login Verification Code",
        text: `Your Code is:\nUse it to verify your email in Space.\n\nIf you didn't request this, simply ignore this message.\n\nYours,\nThe Space Team`
    }
    
    plan.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Try again later.", status: 500 });
        } else {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    res.send({ done: 0, detail: error });
                    console.log(error);
                }
                else {
                    res.status(200).send({ message: "Plan Uploaded successfully", status: 200, done: 1, detail: info });
                    console.log(info);
                }
            })
        }
    })
}
