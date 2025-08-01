// Test script for WhatsApp integration
const axios = require('axios');

async function testWhatsAppIntegration() {
  try {
    console.log('🧪 Testing WhatsApp Integration...');
    console.log('📱 Target Number: 9347620268');
    
    const testMessage = `*Test Message from Contact Form*

*Name:* Test User
*Email:* test@example.com
*Message:* This is a test message from the contact form integration.`;

    const response = await axios.post('http://localhost:5000/api/send-whatsapp', {
      to: '9347620268',
      message: testMessage
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Test successful!');
    console.log('Response:', response.data);
    
  } catch (error) {
    console.error('❌ Test failed!');
    console.error('Error:', error.response?.data || error.message);
  }
}

// Run the test
testWhatsAppIntegration(); 