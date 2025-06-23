// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Check if credentials are loaded correctly
if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
  console.error('❌ Missing Gmail credentials in .env file');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

app.post('/send-reset-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const resetLink = `${process.env.CLIENT_URL}/reset.html?email=${encodeURIComponent(email)}`;

  const mailOptions = {
    from: `"Email reset link" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Password Reset Request',
    html: `
      <h3>Password Reset</h3>
      <p>You requested a password reset. Click the link below to reset your password:</p>
      <a href="${resetLink}" style="color: blue;">Reset Your Password</a>
      <p>If you didn’t request this, just ignore this email.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Reset email sent to ${email}`);
    res.status(200).json({ message: 'Reset email sent successfully.' });
  } catch (error) {
    console.error('Failed to send email:', error.message);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
