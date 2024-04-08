import { FastifyRequest, FastifyReply } from 'fastify';
import GetCarByBrandsService from '../service/getCarsByBrandService';

class GetCarsByBrandController {
    async execute(request: FastifyRequest, reply: FastifyReply) {

        const carService = new GetCarByBrandsService();

        const response = await carService.execute();

        return reply.send(response);
    }
}

export default GetCarsByBrandController;