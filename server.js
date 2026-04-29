const express = require('express');
const path = require('path');
const cors = require('cors');
const { JSDOM } = require('jsdom');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Allowed airline codes (IATA codes)
const ALLOWED_AIRLINES = [
    'AI', 'EK', 'EY', 'QR', 'SV', 'TK', 'SQ', 'MH', 'TG', 'UL', 'BA', 'LH', 
    'AF', 'KL', 'EK', 'QF', 'NZ', 'SQ', 'CX', 'JL', 'KE', 'ET', 'MS', 'KQ', 'OU', 'WY'
];

// QR validation functions
function isValidAirlineQR(qrData) {
    try {
        // Check if QR contains airline boarding pass structure
        if (!qrData || typeof qrData !== 'string') {
            return { valid: false, reason: 'Invalid QR data format' };
        }

        // Look for airline codes in QR data
        const hasValidAirline = ALLOWED_AIRLINES.some(code => 
            qrData.toUpperCase().includes(code)
        );

        if (!hasValidAirline) {
            return { valid: false, reason: 'QR does not contain valid airline information' };
        }

        // Check for boarding pass indicators
        const boardingPassIndicators = [
            'BOARDING_PASS', 'BOARDING PASS', 'FLIGHT', 'AIRLINE', 'IATA'
        ];
        
        const hasBoardingPassIndicators = boardingPassIndicators.some(indicator =>
            qrData.toUpperCase().includes(indicator)
        );

        if (!hasBoardingPassIndicators) {
            return { valid: false, reason: 'QR is not an airline boarding pass' };
        }

        // Basic structure validation
        const hasFlightNumber = /\b[A-Z]{2}\d{3,4}\b/.test(qrData);
        const hasPassengerName = /[A-Z][a-z]{2,}/i.test(qrData);
        const hasDate = /\d{4}-\d{2}-\d{2}/.test(qrData);

        if (!hasFlightNumber || !hasPassengerName || !hasDate) {
            return { valid: false, reason: 'QR missing required flight information' };
        }

        return { valid: true, reason: 'Valid airline QR' };

    } catch (error) {
        return { valid: false, reason: 'QR parsing error' };
    }
}

// Mock QR decoder (in production, use a proper QR library)
function decodeQR() {
    return new Promise((resolve) => {
        // For demo purposes, return mock data
        setTimeout(() => {
            const mockQRData = {
                type: "AIRLINE_BOARDING_PASS",
                airline: "AI",
                flight: "AI202",
                name: "John Doe",
                date: "2024-05-01",
                seat: "12A",
                gate: "B24",
                boardingTime: "10:30"
            };
            resolve(mockQRData);
        }, 1000);
    });
}

// API Routes
app.post('/api/verify-qr', async (req, res) => {
    try {
        // Decode QR (mocked, no file used)
        const qrData = await decodeQR();
        
        // Validate QR
        const validation = isValidAirlineQR(JSON.stringify(qrData));
        
        // Generate verification ID
        const verificationId = 'SK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        
        if (validation.valid) {
            res.json({
                status: 'verified',
                progress: 100,
                data: qrData,
                verificationId: verificationId,
                timestamp: new Date().toISOString()
            });
        } else {
            res.json({
                status: 'rejected',
                reason: validation.reason,
                progress: 100,
                verificationId: verificationId,
                timestamp: new Date().toISOString()
            });
        }

    } catch (error) {
        console.error('QR verification error:', error);
        res.status(500).json({
            status: 'error',
            reason: 'Server error during verification',
            timestamp: new Date().toISOString()
        });
    }
});

// Endpoint for multiple QR codes - fixed for serverless
app.post('/api/verify-multiple-qr', async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Request received"
    });
});

// Get verification status
app.get('/api/verification-status/:id', (req, res) => {
    const verificationId = req.params.id;
    
    // Mock verification status (in production, use database)
    const statuses = ['processing', 'analyzing', 'validating', 'complete'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const progress = Math.floor(Math.random() * 100);
    
    res.json({
        verificationId: verificationId,
        status: randomStatus,
        progress: progress,
        timestamp: new Date().toISOString()
    });
});

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'qr_upload_state_qr.html'));
});

app.get('/processing', (req, res) => {
    res.sendFile(path.join(__dirname, 'processing_state_qr.html'));
});

app.get('/verification-result', (req, res) => {
    res.sendFile(path.join(__dirname, 'verification_result_qr.html'));
});

app.get('/final-result', (req, res) => {
    res.sendFile(path.join(__dirname, 'final_result_qr.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`QR Verification Server running on port ${PORT}`);
    console.log('Available endpoints:');
    console.log('  POST /api/verify-qr - Verify QR code');
    console.log('  POST /api/verify-multiple-qr - Verify multiple QR codes');
    console.log('  GET /api/verification-status/:id - Get verification status');
    console.log('  GET / - QR Upload page');
    console.log('  GET /processing - Processing page');
    console.log('  GET /verification-result - Verification result page');
    console.log('  GET /final-result - Final result page');
});
