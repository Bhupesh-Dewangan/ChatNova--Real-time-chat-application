import e from 'express';
import express from 'express';

const router = express.Router();

// Example message route
router.get('/send', (req, res) => {
  res.send('Send message route');
});


export default router;