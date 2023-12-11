import express, { Request, Response } from 'express';
import { getDBObject } from '../db';

const referralRouter = express.Router();


referralRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send('Bad Request: ID is missing');
    }

    const db = await getDBObject();
    const rc = await db.models.Referrals.findOne({ where: { id } });
    console.log("rc = ", rc)
  return res.status(200).send(rc);
  } catch (error) {
    console.error('Error fetching referral:', error);
    return res.status(500).send({ error });
  }
});

referralRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send('Bad Request: ID is missing');
    }

    const db = await getDBObject();
    await db.models.Referrals.destroy({ where: { id } });
    return res.status(200).send({});
  } catch (error) {
    console.error('Error fetching referral:', error);
    return res.status(500).send({ error });
  }
});

referralRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { body } = req;
    console.log("body = ", body)

    const db = await getDBObject();
    await db.models.Referrals.create(body);
    return res.status(201).send(body);
  } catch (error) {
    console.error('Error saving referral:', error);
    return res.status(500).send({ error });
  } 
});

referralRouter.put("/", async (req: Request, res: Response) => {
  try {
    const { body } = req;
    console.log("body = ", body)

    const db = await getDBObject();
    await db.models.Referrals.update(body, {
      where: {
        id: body.id,
      },
    });
    return res.status(200).send(body);
  } catch (error) {
    console.error('Error updating referral:', error);
    return res.status(500).send({ error });
  }
});

export default referralRouter;
