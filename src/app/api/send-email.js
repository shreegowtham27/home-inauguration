// pages/api/send-email.js
import mailgun from "mailgun.js";
import formData from "form-data";

const mg = mailgun(formData);

const DOMAIN = process.env.MAILGUN_DOMAIN; // Replace with your Mailgun domain
const API_KEY = process.env.MAILGUN_API_KEY; // Replace with your Mailgun API key

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ message: "Name and message are required." });
  }

  try {
    // const client = mg.client({ username: "api", key: API_KEY });
    const client = mg.client({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
      })

    const response = await client.messages.create(DOMAIN, {
      from: process.env.FROM_EMAIL_ADDRESS,
      to: process.env.MY_EMAIL_ADDRESS, // Replace with your email address
      subject: `House Warming Wishes from ${name}`,
      text: message,
    });

    res.status(200).json({ message: "Email sent successfully.", id: response.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email." });
  }
}
