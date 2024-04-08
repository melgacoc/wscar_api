import { FastifyRequest, FastifyReply } from 'fastify';
import CreateCarService from '../service/newCarService';
import { ICar }  from '../interfaces/carInterface';



class CreateCarController {
    async execute(request: FastifyRequest, reply: FastifyReply) {
        const {
            modelo_id,
            ano,
            combustivel,
            num_portas,
            cor,
            nome_modelo,
            valor,
        } = request.body as ICar;

        const carService = new CreateCarService();

        const response = await carService.execute({
            modelo_id,
            ano,
            combustivel,
            num_portas,
            cor,
            nome_modelo,
            valor,
        });

        return reply.send(response);
    }
}


export default CreateCarController;