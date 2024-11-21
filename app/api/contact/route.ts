import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Add CORS headers
  const responseHeaders = new Headers();
  responseHeaders.append('Access-Control-Allow-Origin', '*'); // Allow all origins (or specify your frontend URL if needed)
  responseHeaders.append('Access-Control-Allow-Methods', 'POST');
  responseHeaders.append('Access-Control-Allow-Headers', 'Content-Type');

  try {
    // Check if it's a preflight request (OPTIONS)
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 200,
        headers: responseHeaders,
      });
    }

    // Parse the incoming request JSON data
    const { name, email, phone, message } = await req.json();

    // Log received data for debugging
    console.log('Received data:', { name, email, message });

    // Validate input fields
    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: responseHeaders }
      );
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: 'asimba@surgemines.com',
      subject: `New contact message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return a successful response
    return new NextResponse(
      JSON.stringify({ message: 'Your message has been sent!' }),
      { status: 200, headers: responseHeaders }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    return new NextResponse(
      JSON.stringify({ error: 'There was an error sending your message' }),
      { status: 500, headers: responseHeaders }
    );
  }
}