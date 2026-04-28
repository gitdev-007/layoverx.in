# LayoverX Email Integration Setup

## Overview
This document explains the email sending system integrated into the LayoverX contact form.

## Files Created/Modified

### Backend
- `api/contact.js` - Vercel serverless function for email sending
- `package.json` - Added nodemailer dependency
- `vercel.json` - Vercel configuration for serverless functions

### Frontend
- `js/contact.js` - Contact form handling and API integration
- `index.html` - Added contact.js script

## Environment Variables

### Required Environment Variables
- `EMAIL_PASS` - Gmail App Password (already configured in Vercel)

### Setting up Gmail App Password
1. Enable 2-factor authentication on the Gmail account
2. Go to Google Account settings → Security → App passwords
3. Generate a new app password for "LayoverX"
4. Use this password as the EMAIL_PASS environment variable

## Email Flow

```
User fills contact form → Frontend validation → API call to /api/contact → 
Backend validation → Send email via Gmail SMTP → Return response → 
Show success/error message to user
```

## API Endpoint

### POST /api/contact

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

or

```json
{
  "success": false,
  "error": "Error message"
}
```

## Features Implemented

### Backend Features
- ✅ Gmail SMTP integration with Nodemailer
- ✅ Input validation (name, email, message)
- ✅ Email format validation
- ✅ HTML email template with professional styling
- ✅ Error handling and logging
- ✅ Environment variable security

### Frontend Features
- ✅ Form validation (client-side)
- ✅ Loading state during submission
- ✅ Success/error message display
- ✅ Form clearing after successful submission
- ✅ Field-level validation feedback
- ✅ Auto-dismiss messages after 5 seconds
- ✅ Smooth scrolling to messages

## Testing

### Local Testing
1. Install dependencies: `npm install`
2. Set environment variables
3. Run local server for testing API endpoint
4. Test form submission in browser

### Production Testing
1. Deploy to Vercel
2. Ensure EMAIL_PASS environment variable is set
3. Test contact form on live site
4. Check email delivery to founder@layoverx.in

## Security Considerations

- ✅ Email password stored in environment variables only
- ✅ Input validation and sanitization
- ✅ Rate limiting considerations (can be added)
- ✅ CORS protection via Vercel
- ✅ No sensitive data exposed in frontend

## Troubleshooting

### Common Issues
1. **Email not sending**: Check EMAIL_PASS environment variable
2. **Invalid email format**: Verify Gmail App Password setup
3. **API not found**: Ensure api/contact.js is in correct location
4. **Form not working**: Check browser console for JavaScript errors

### Debug Logging
- Backend errors logged to console
- Frontend errors logged to browser console
- Network errors shown to user with helpful messages

## Deployment Notes

- Works with Vercel serverless functions
- Uses Node.js 18.x runtime
- No additional configuration needed
- Environment variables managed through Vercel dashboard

## Email Template

The system sends professionally formatted HTML emails with:
- Sender name and email
- Message content with proper formatting
- Timestamp of submission
- LayoverX branding

Emails are sent to: founder@layoverx.in
