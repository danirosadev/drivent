import { Ticket } from '@prisma/client';
import httpStatus from 'http-status';
import ticketsRepository from '@/repositories/tickets-repository';

async function getTicketsTypes() {
  const types = await ticketsRepository.findTicketsTypes();
  if (!types) {
    return httpStatus.NOT_FOUND;
  }
  return types;
}

const ticketsService = {
  getTicketsTypes,
};

export default ticketsService;
