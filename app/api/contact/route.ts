import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, businessRevenue, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Catalyst Inquiry" <${process.env.EMAIL_USER}>`,
      to: 'sadeq@abbass.group',
      // to: 'mohammadjahid0007@gmail.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background-color: #1a1a1a; color: #ffffff; padding: 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid #eeeeee; padding-bottom: 10px; }
            .field:last-child { border-bottom: none; }
            .label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block; }
            .value { font-size: 16px; color: #1a1a1a; font-weight: 500; }
            .message-value { font-size: 14px; color: #1a1a1a; font-weight: 400; line-height: 1.6; white-space: pre-wrap; }
            .footer { background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Consultation Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Full Name</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email Address</span>
                <div class="value"><a href="mailto:${email}" style="color: #1a1a1a; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">Phone Number</span>
                <div class="value"><a href="tel:${phone}" style="color: #1a1a1a; text-decoration: none;">${phone}</a></div>
              </div>
              <div class="field">
                <span class="label">Annual Revenue Range</span>
                <div class="value">${businessRevenue || 'Not specified'}</div>
              </div>
              <div class="field">
                <span class="label">Message</span>
                <div class="message-value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Catalyst website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
