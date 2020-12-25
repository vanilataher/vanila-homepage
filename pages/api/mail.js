// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { nanoid } from 'nanoid';
import nodemailer from 'nodemailer';

function prettyFormating(data) {
  let text = '';
  text += data;
  return text.replace(',', ', ');
}

function generateMailContent(id, data) {
  const text = /*html*/ `
	<!DOCTYPE>
	<html>
    <body>
      <br><b>ID:</b> ${id}
      <br><b>Name:</b> ${data.name}
			<br><b>Email:</b> ${data.email}
			<br><b>Options:</b> ${prettyFormating(data.options)}
			<br><br><b>Message:</b> ${data.text}
			<br><br><b>Budget:</b> $${data.budget}
		</body>
  </html>`;
  return text;
}

const {
  MAIL_TEST_ACCOUNT,
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURITY,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_DOMAIN,
  MAIL_FROM,
  MAIL_TO,
} = process.env;

export default async (req, res) => {
  const id = nanoid();
  const { body } = req;
  const mailContent = await generateMailContent(id, body);

  let auth =
    MAIL_TEST_ACCOUNT === 'true'
      ? await nodemailer.createTestAccount()
      : {
          user: MAIL_USERNAME,
          pass: MAIL_PASSWORD,
        };

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: MAIL_HOST || 'smtp.ethereal.email',
    port: Number(MAIL_PORT) || 587,
    secure: MAIL_SECURITY === 'true', // true for 465, false for other ports
    auth,
  });
  const info = await transporter.sendMail({
    from: MAIL_FROM,
    to: MAIL_TO,
    replyTo: body.email,
    subject: `[${MAIL_DOMAIN} - new message] - ${prettyFormating(
      body.options
    )} - $${body.budget}`,
    html: mailContent,
  });
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  res.send('ok');
};
