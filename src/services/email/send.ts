import sgMail from '@sendgrid/mail';
import axios from 'axios';
sgMail.setApiKey(process.env.SENDGRID_ENV as string);

interface SendEmailResponse {
  status: string
  message: string
}

const sendEmailSendgridService = async (email: string, message: string) => {
  const data = {
    email,
    message
  }
  const res = await axios.post('/api/sendEmailSendgrid', data);
  return res;
}

const sendEmailSMTPServive = async (email: string, message: string) => {
  try {
    const data = {
      email,
      message
    }
    const res = await axios.post('/api/sendEmailSMTP', data);
    return res;
  } catch (err: any) {
    return err;
  }
}

export {
  sendEmailSendgridService,
  sendEmailSMTPServive
}