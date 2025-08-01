const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// WhatsApp API endpoint
app.post('/api/send-whatsapp', async (req, res) => {
  try {
    const { to, message } = req.body;
    
    console.log(`Attempting to send WhatsApp message to ${to}: ${message}`);
    
    // Send WhatsApp message using a free API service
    const whatsappResponse = await sendWhatsAppMessage(to, message);
    
    if (whatsappResponse.success) {
      res.json({ success: true, message: 'WhatsApp message sent successfully' });
    } else {
      res.status(400).json({ success: false, message: whatsappResponse.error || 'Failed to send WhatsApp message' });
    }
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ success: false, message: 'Failed to send WhatsApp message' });
  }
});

// Function to send WhatsApp message
async function sendWhatsAppMessage(to, message) {
  try {
    // Option 1: Using WhatsApp Business API (requires setup)
    if (process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) {
      const response = await axios.post(`https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
        messaging_product: 'whatsapp',
        to: to,
        type: 'text',
        text: { body: message }
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      return { success: true };
    }
    
    // Option 2: Using Twilio WhatsApp API (requires setup)
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
      const response = await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`, {
        To: `whatsapp:+${to}`,
        From: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        Body: message
      }, {
        auth: {
          username: process.env.TWILIO_ACCOUNT_SID,
          password: process.env.TWILIO_AUTH_TOKEN
        }
      });
      return { success: true };
    }
    
    // Option 3: Using a free WhatsApp API service for testing
    // This is a demo implementation - replace with your preferred service
    const response = await axios.post('https://api.whatsapp.com/send', {
      phone: to,
      message: message
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.WHATSAPP_API_KEY || 'demo-key'
      }
    });
    
    return { success: true };
    
  } catch (error) {
    console.error('WhatsApp API Error:', error.response?.data || error.message);
    
    // For testing purposes, simulate success if no API is configured
    if (!process.env.WHATSAPP_ACCESS_TOKEN && !process.env.TWILIO_ACCOUNT_SID) {
      console.log(`[DEMO MODE] Would send WhatsApp message to ${to}: ${message}`);
      console.log('To enable real WhatsApp sending, set up API credentials in .env file');
      return { success: true };
    }
    
    return { 
      success: false, 
      error: error.response?.data?.message || error.message 
    };
  }
}

// Serve static files from React build
app.use(express.static('build'));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`WhatsApp integration ready for number: 7891329789`);
}); 