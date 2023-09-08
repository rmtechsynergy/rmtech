import sgMail from '@sendgrid/mail';
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
    status: 'ok',
    message
  };
  return result;
}

export default sendEmail