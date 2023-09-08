import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import { sendEmail } from "@/helpers/sendgrid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await sendEmail(req.body.email, req.body.message);
    return res.status(200).json({ message: "Email sent successfully" });
  }
}