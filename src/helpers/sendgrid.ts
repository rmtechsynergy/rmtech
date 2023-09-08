import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_ENV as string);

export const sendEmail = async (email: string, message: string) => {
  const config = {
    to: 'khoerul27@gmail.com',
    from: email,
    subject: 'Sending with SendGrid is Fun',
    text: message,
  };

  return await sgMail.send(config);
}