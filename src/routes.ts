import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import GetCarsController from './controller/getCarsController';
import GetCarsByBrandController from './controller/getCarsByBrandController';
import CreateCarController from './controller/newCarController';
import CreateCarByBrandController from './controller/newCarByBrandController';

export async function routes(fastify: FastifyInstance, reply: FastifyReply) {
    fastify.get("/getCarsByBrand", async (req: FastifyRequest, reply: FastifyReply) => {
        const getCarsByBrandController = new GetCarsByBrandController();
        const response = await getCarsByBrandController.execute(req, reply);
        return response;
    });

    fastify.get("/getCars", async (req: FastifyRequest, reply: FastifyReply) => {
        const getCarsController = new GetCarsController();
        const response = await getCarsController.execute(req, reply);
        return response;
    });

    fastify.post("/newCar", async (req: FastifyRequest, reply: FastifyReply) => {
        const createCarController = new CreateCarController();
        const response = await createCarController.execute(req, reply);
        return response;
    });

    fastify.post("/newCarByBrand", async (req: FastifyRequest, reply: FastifyReply) => {
        const createCarByBrandController = new CreateCarByBrandController();
        const response = await createCarByBrandController.execute(req, reply);
        return response;
    });
}
