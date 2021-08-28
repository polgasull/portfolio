/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "apikey",
    // eslint-disable-next-line max-len
    pass: process.env.VUE_APP_SENDGRID_API_KEY,
  },
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const name = request.query.name;
  const phone = request.query.phone;
  const emailFrom = request.query.email_from;
  const subject = request.query.subject;
  const message = request.query.message;

  const mailOptions = {
    from: "Pol Gasull <pgasulln@gmail.com>",
    to: "pgasulln@gmail.com",
    subject: `Nuevo mensaje: ${subject}`,
    html: `Nombre: ${name} <br><br> Phone: ${phone} <br><br> ${message} <br><br> From ${emailFrom}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`ERRPR: (email) ${emailFrom} --- (message) ${message} --- (error) ${error.toString()}`);
      response.send(error.toString());
    }
    response.send("Tu mensaje ha sido enviado correctamente");
  });
});
