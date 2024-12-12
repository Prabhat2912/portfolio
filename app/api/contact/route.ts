import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parsing incoming JSON request body
    const { firstName, lastName, email, phone, option, message } = body;

    // Check for required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the transporter for sending emails via Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to recipient (you)
    const recipientMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Option: ${option}
        Message: ${message}
      `,
    };

    // Email to user (acknowledgment)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // User's email from the form
      subject: "Thank You for Contacting Us!",
      text: `
        Hi ${firstName},

        Thank you for reaching out! We have received your message and will get back to you shortly.

        Here’s a summary of what you shared:
        - Name: ${firstName} ${lastName}
        - Email: ${email}
        - Phone: ${phone || "N/A"}
        - Inquiry: ${option || "N/A"}
        - Message: ${message}

        Best regards,
        Your Team
      `,
    };

    // Send email to recipient
    await transporter.sendMail(recipientMailOptions);

    // Send acknowledgment email to the user
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
