export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Extract QR data from request body
    const { qrData } = req.body;

    // Validate required fields
    if (!qrData) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required field: qrData' 
      });
    }

    // Parse QR data (it should be a JSON string)
    let parsedQRData;
    try {
      parsedQRData = JSON.parse(qrData);
    } catch (parseError) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid QR data format' 
      });
    }

    console.log('Verifying QR data:', parsedQRData);

    // Simulate verification process (in a real implementation, you would validate against airline databases)
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simulate verification logic - for demo purposes, we'll consider it valid
    const isValid = true; // In real implementation, this would be based on actual validation

    if (isValid) {
      // Return successful verification with extracted details
      const verificationResult = {
        valid: true,
        name: parsedQRData.passengerName || 'John Doe',
        flight: parsedQRData.flightNumber || 'AA1234',
        time: `${parsedQRData.date || '2026-04-29'} at ${parsedQRData.time || '14:30'}`,
        departure: parsedQRData.departure || 'SFO',
        arrival: parsedQRData.arrival || 'JFK',
        seat: parsedQRData.seat || '12A',
        gate: parsedQRData.gate || 'B22',
        verificationId: `AQ-${Math.floor(Math.random() * 999999)}`,
        timestamp: new Date().toISOString()
      };

      res.status(200).json(verificationResult);

    } else {
      // Return failed verification
      const verificationResult = {
        valid: false,
        error: 'QR code could not be verified',
        verificationId: `AQ-${Math.floor(Math.random() * 999999)}`,
        timestamp: new Date().toISOString()
      };

      res.status(200).json(verificationResult);
    }

  } catch (error) {
    console.error('QR verification error:', error);
    
    // Return error response
    res.status(500).json({ 
      success: false, 
      error: 'Failed to verify QR code. Please try again.' 
    });
  }
}
