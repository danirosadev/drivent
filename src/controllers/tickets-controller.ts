import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ticketsService from '@/services/tickets-service';

export async function getTicketsTypes(req: Request, res: Response) {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');
  if (!token) return res.status(httpStatus.UNAUTHORIZED).send({});

  try {
    const types = await ticketsService.getTicketsTypes();
    return res.status(httpStatus.OK).send(types);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
