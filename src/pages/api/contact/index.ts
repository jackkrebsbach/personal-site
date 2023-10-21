/* eslint-disable import/no-anonymous-default-export */
"use strict";
import nodemailer from "nodemailer";

const sendEmail = async (
  email: string,
  name: string,
  company: string,
  message: string,
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const recipients = process.env.MAIL_RECIPIENTS;

  let info = await transporter.sendMail({
    from: '"Jack Krebsbach" <jacksonkrebsbach@gmail.com>',
    to: recipients,
    subject: "Personal Website: Contact Initiated",
    text: `
      Project request\n
      Email: ${email}\n
      Name: ${name}\n
      Company: ${company}\n
      Message: ${message}\n
    `,
    html: `
      <h1>Project request</h1>
      <br>
      <p>Email : ${email}</p>
      <br>
      <p>Name : ${name}</p>
      <br>
      <p>Company : ${company}</p>
      <br>
      <p>Message :</p>
      <p>${message}</p>
    `,
  });

  console.log("Message sent: %s", info.messageId);

  await transporter.sendMail({
    from: '"Jack Krebsbach" <jacksonkrebsbach@gmail.com>',
    to: email,
    subject: "Jack Krebsbach: Contact successful!",
    text: `Thanks for your message! I will get back to you shortly.`,
    html: `<p>Thanks for your message! I will get back to you shortly.</p>
            <p> -Jack</p>
      `,
  });
};

export default async (req: any, res: any) => {
  try {
    const { email, name, company, message } = req.body;
    await sendEmail(email, name, company, message);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
