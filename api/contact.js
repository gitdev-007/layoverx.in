import nodemailer from 'nodemailer';

// Create transporter with Gmail SMTP
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'founder@layoverx.in',
    pass: process.env.EMAIL_PASS
  }
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Extract form data
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: name, email, or message' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email format' 
      });
    }

    // Create email content
    const mailOptions = {
      from: 'founder@layoverx.in',
      to: 'founder@layoverx.in',
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #ff6b00; padding-bottom: 10px;">
              New Contact Form Message
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; font-size: 14px; margin-bottom: 5px; text-transform: uppercase;">Name:</h3>
              <p style="color: #333; font-size: 16px; margin: 0;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; font-size: 14px; margin-bottom: 5px; text-transform: uppercase;">Email:</h3>
              <p style="color: #333; font-size: 16px; margin: 0;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; font-size: 14px; margin-bottom: 5px; text-transform: uppercase;">Message:</h3>
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                This message was sent from the LayoverX contact form on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    });
  }
}
