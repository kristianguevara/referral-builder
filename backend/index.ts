import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import referralRouter from './routers/referralRouter';
import referralsRouter from './routers/referralsRouter';

dotenv.config();
const app = express();
const port = process.env.PORT;
const frontendUrl = process.env.FRONTEND_BASE_URL ?? "";
const apiKey = process.env.API_KEY ?? "";


// Middleware to validate API key
const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
  const requestApiKey = req.headers['x-api-key'];

  if (!requestApiKey || requestApiKey !== apiKey) {
    return res.status(403).json({ error: 'Invalid API key' });
  }

  next();
};

// Setup middleware
app.use(cors({
  origin: (origin, callback) => {
    // Limit only to our frontend - http://localhost:3000
    if (origin?.includes(frontendUrl)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));
app.use(bodyParser.json({limit: '5mb'}));
app.use('/api', validateApiKey);

app.use('/api/referral', referralRouter);
app.use('/api/referrals', referralsRouter);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

