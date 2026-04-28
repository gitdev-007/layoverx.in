export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Extract file data from request body
    const { file, name, type } = req.body;

    // Validate required fields
    if (!file || !name || !type) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: file, name, or type' 
      });
    }

    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(type)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid file type. Only PNG, JPG, and PDF files are allowed.' 
      });
    }

    // Simulate QR processing (in a real implementation, you would use a QR library)
    // For now, we'll simulate a successful QR decode with sample data
    console.log('Processing QR file:', name);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulated QR data (in real implementation, this would be the decoded QR content)
    const simulatedQRData = {
      passengerName: "John Doe",
      flightNumber: "AA1234",
      departure: "SFO",
      arrival: "JFK",
      date: "2026-04-29",
      time: "14:30",
      seat: "12A",
      gate: "B22"
    };

    // Return success response with QR data
    res.status(200).json({ 
      success: true, 
      qrData: JSON.stringify(simulatedQRData),
      message: 'QR code processed successfully'
    });

  } catch (error) {
    console.error('QR processing error:', error);
    
    // Return error response
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process QR code. Please try again.' 
    });
  }
}
