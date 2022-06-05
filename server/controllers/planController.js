const Plan = require("../models/Plan");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "teamfitlust@yahoo.com",
    pass: "lxfpdhbovmdsyatp",
  },
});

module.exports.createPlan = async (req, res, next) => {
  try {
    var planObject = req.body;
    // console.log(planObject);
    const { email, name } = req.body;
    const plancheck = await Plan.find({ email: email });
    // console.log(plancheck);
    if (plancheck.length !== 0) {
      res
        .status(200)
        .send({ message: "Oopss!! You've already applied.", status: 500 });
    }
    const plan = new Plan(planObject);
    var mailOptions = {
      from: "teamfitlust@yahoo.com",
      to: email,
      subject: "Custom Diet and workout plan - FITLUST",
      html: { path: "./mail/beefree-dbbjfimd35j.html" },
    };
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Try again later.", status: 500 });
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Try again later.", status: 500 });
    } else {
      res
        .status(200)
        .send({
          message: "Details recieved, we'll reach you soon",
          status: 200,
          done: 1,
          detail: info,
        });
      console.log(info);
      plan.save((err) => {
        if (err) {
          console.log(err);
          res.status(500).send({ message: "Try again later.", status: 500 });
        }
      });
    }
  });
};

module.exports.getPlans = async (req, res) => {
  try {
    let plans = await Plan.find({});
    res.send({ plans: plans });
  } catch {
    console.log(err.message);
    res.status(500).send("Interal Server Error");
  }
};

module.exports.getPlan = async (req, res) => {
  try {
    var id = req.params.id;
    const plan = await Plan.findById(id);
    res.send({ plan: plan });
  } catch {
    res.status(500).send("Interal Server Error");
  }
};
