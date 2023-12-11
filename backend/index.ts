import express, { Request, Response } from 'express';
import { getDBObject } from './db';

// Create an Express application
const app = express();
const port = 8001;

// Define a simple endpoint
app.get('/', async (req: Request, res: Response) => {
  const db = await getDBObject();
  const rc = await db.models.ResearchConfigurations.findAll();
  res.send(rc);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

