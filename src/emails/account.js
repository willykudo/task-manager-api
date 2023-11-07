"use strict";

const nodemailer = require("nodemailer");

function transporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "willyraditya01@gmail.com", // Your email address
      pass: process.env.PASSWORD, // Your password (or special app password)
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

function sendWelcomeEmail(email, name) {
  const transporterObject = transporter();
  transporterObject
    .sendMail({
      from: "Task Manager API <willyraditya01@gmail.com>",
      to: email,
      subject: "Thanks for joining!",
      text: `Welcome to our service, ${name}!`,
      html: `<b>Welcome to our service, ${name}!</b>`,
    })
    .then((info) => {
      console.log("Email sent: " + info.response);
    })
    .catch((error) => {
      console.error("Error sending email: " + error);
    });
}

function sendDeleteEmail(email, name) {
  const transporterObject = transporter();
  transporterObject
    .sendMail({
      from: "Task Manager API <willyraditya01@gmail.com>",
      to: email,
      subject: "We're sorry to see you leave",
      text: `We hope to see you back again someday, ${name}!`,
      html: `<b>We hope to see you back again someday, ${name}!</b>`,
    })
    .then((info) => {
      console.log("Email sent: " + info.response);
    })
    .catch((error) => {
      console.error("Error sending email: " + error);
    });
}

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail,
};
