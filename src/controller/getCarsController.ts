import { FastifyRequest, FastifyReply } from 'fastify';
import GetCarsService from '../service/getCarsService';

class GetCarsController {
    async execute(request: FastifyRequest, reply: FastifyReply) {

        const carService = new GetCarsService();

        const response = await carService.execute();

        return reply.send(response);
    }
}

export default GetCarsController;