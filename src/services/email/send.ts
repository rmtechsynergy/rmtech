import sgMail from '@sendgrid/mail';
import {SMTPClient} from 'smtp-client';
sgMail.setApiKey(process.env.SENDGRID_ENV as string);

interface SendEmailResponse {
  status: string
  message: string
}

const sendEmail = async (email: string, message: string): Promise<SendEmailResponse> => {
  const config = {
    to: 'khoerul27@gmail.com',
    from: email,
    subject: 'Sending with SendGrid is Fun',
    text: message,
  };

  const response = await sgMail.send(config);
  console.log(response);
  const result: SendEmailResponse = {
    status: 'success',
    message
  };
  return result;
}

const sendEmailSMTP = async (email: string, message: string) => {
  const config = {
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: true,
    auth: {
      user: 'khoerul27@gmail.com',
      pass: 'vdZm3wzY7nPjMpI1'
    }
  };

  const smtp = new SMTPClient(config);
  await smtp.connect();
  await smtp.authPlain({ username: 'khoerul27@gmail.com', password: 'vdZm3wzY7nPjMpI1' });
  await smtp.mail({ from: email });
  await smtp.rcpt({ to: 'khoerul27@gmail.com' });
  await smtp.data(message);
  await smtp.close();
}

export {
  sendEmail,
  sendEmailSMTP
}