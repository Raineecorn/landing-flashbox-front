const express = require('express');
const axios = require('axios');
const app = express();

app.get('/tracking/:trackingNumber', async (req, res) => {
  const { trackingNumber } = req.params;
  
  try {
    const { data, error } = await axios.get(`https://your-supabase-endpoint`, {
      params: {
        tracking_number: trackingNumber
      }
    });

    if (error) {
      throw new Error(error);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tracking status' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
