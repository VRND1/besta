# WhatsApp Integration Setup Guide

This guide will help you set up the WhatsApp integration for your contact form.

## Prerequisites

1. Install the required dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:

```env
# WhatsApp API Configuration
# Choose one of the following options and uncomment the relevant section

# Option 1: WhatsApp Business API
# WHATSAPP_ACCESS_TOKEN=your_whatsapp_access_token_here
# WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_here

# Option 2: Twilio WhatsApp API
# TWILIO_ACCOUNT_SID=your_twilio_account_sid_here
# TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
# TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number_here

# Option 3: MessageBird WhatsApp API
# MESSAGEBIRD_API_KEY=your_messagebird_api_key_here
# MESSAGEBIRD_WHATSAPP_CHANNEL_ID=your_channel_id_here

# Server Configuration
PORT=5000
NODE_ENV=development
```

## WhatsApp API Options

### Option 1: WhatsApp Business API (Recommended)
1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a new app
3. Add WhatsApp Business API
4. Get your access token and phone number ID
5. Uncomment the WhatsApp Business API section in `server.js`

### Option 2: Twilio WhatsApp API
1. Sign up for [Twilio](https://www.twilio.com/)
2. Get your Account SID and Auth Token
3. Set up WhatsApp Sandbox or Business number
4. Uncomment the Twilio section in `server.js`

### Option 3: MessageBird WhatsApp API
1. Sign up for [MessageBird](https://messagebird.com/)
2. Get your API key
3. Set up WhatsApp Business API
4. Uncomment the MessageBird section in `server.js`

## Running the Application

1. Start the development server:
```bash
npm run dev
```

This will start both the React frontend and the Express backend server.

2. The contact form will now send messages directly to WhatsApp number: 789-1329-789

## Important Notes

- The WhatsApp number in the code is set to: 7891329789 (without dashes)
- Make sure your WhatsApp API service is properly configured
- Test the integration in development mode first
- For production, ensure proper error handling and rate limiting

## Troubleshooting

1. Check that all environment variables are set correctly
2. Verify your WhatsApp API credentials
3. Ensure the target phone number is in the correct format
4. Check server logs for any API errors 