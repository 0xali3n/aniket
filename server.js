// Simple proxy server for Circle Faucet API
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Proxy endpoint for Circle Faucet API
app.post('/api/faucet', async (req, res) => {
  try {
    const response = await fetch('https://faucet.circle.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json().catch(() => ({ message: await response.text() }));
    
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Proxy error: ' + error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log(`Proxy endpoint: http://localhost:${PORT}/api/faucet`);
});

