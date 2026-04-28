# LayoverX Contact Form

## Overview
This document describes the contact form functionality for LayoverX.

## Files

### Backend
- `api/contact.js` - Contact form API endpoint

### Frontend
- `js/contact.js` - Contact form handling and API integration

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
  "message": "Request received"
}
```

## Features

- ✅ Form validation (name, email, message)
- ✅ Email format validation
- ✅ Request logging
- ✅ Error handling
- ✅ Success/error message display
