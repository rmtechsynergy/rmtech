import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import { sendEmail } from "@/helpers/smtp";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await sendEmail({
      from: req.body.email,
      to: process.env.SMTP_TO_EMAIL as string,
      subject: "New message from website visitor.",
      html: req.body.message,
    });
  
    return res.status(200).json({ message: "Email sent successfully" });
  }
}