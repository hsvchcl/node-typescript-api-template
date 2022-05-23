import { Request, Response } from 'express';
import { scrapperController } from '../controller';
export const scrapper = (req: Request, res: Response) => {
  try {
    console.log('Component');
    scrapperController();
    res.status(200).json({ status: true, body: req.params });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error_detail: error.message });
  }
};
