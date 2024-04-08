import { FastifyRequest, FastifyReply } from 'fastify';
import CreateCarByBrandService from '../service/newCarByBrandService';
import { ICarBrand }  from '../interfaces/carInterface';

class CreateCarByBrandController {
    async execute(request: FastifyRequest, reply: FastifyReply) {
        const {
            modelo_id,
            ano,
            combustivel,
            num_portas,
            cor,
            nome_modelo,
            valor,
            brand
        } = request.body as ICarBrand;

        const carService = new CreateCarByBrandService();

        const response = await carService.execute({
            modelo_id,
            ano,
            combustivel,
            num_portas,
            cor,
            nome_modelo,
            valor,
            brand
        });

        return reply.send(response);
    }
}


export default CreateCarByBrandController;