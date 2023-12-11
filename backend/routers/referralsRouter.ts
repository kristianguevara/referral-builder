import express, { Request, Response } from 'express';
import { getDBObject } from '../db';

const referralsRouter = express.Router();


referralsRouter.get(`/`, async (req: Request, res: Response) => {
  try {
    const db = await getDBObject();
    const rc = await db.models.Referrals.findAll();
    return res.status(200).send(rc);
  } catch (error) {
    console.error('Error fetching referral:', error);
    return res.status(500).send({ error });
  }
});

export default referralsRouter;
