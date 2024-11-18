import Mailgun from "mailgun.js";
import formData from "form-data";

const mailgun = new Mailgun(formData);

const DOMAIN = process.env.MAILGUN_DOMAIN; // Your Mailgun domain
const API_KEY = process.env.MAILGUN_API_KEY; // Your Mailgun API key

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, message } = body;

    if (!name || !message) {
      return new Response(
        JSON.stringify({ message: "Name and message are required." }),
        { status: 400 }
      );
    }

    const client = mailgun.client({ username: "api", key: API_KEY });

    const response = await client.messages.create(DOMAIN, {
      from: process.env.FROM_EMAIL_ADDRESS, // Sender email
      to: process.env.MY_EMAIL_ADDRESS, // Recipient email
      subject: `House Warming Wishes from ${name}`,
      text: message,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully.", id: response.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to send email." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
