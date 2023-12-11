import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import referralRouter from './routers/referralRouter';
import referralsRouter from './routers/referralsRouter';

dotenv.config();
const app = express();
const port = process.env.PORT;

// Setup middleware
app.use(cors({
  origin: process.env.FRONTEND_BASE_URL
}));
app.use(bodyParser.json({limit: '5mb'}));

app.use('/api/referral', referralRouter);
app.use('/api/referrals', referralsRouter);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

