import prisma from "../prisma";

class GetCarsService {
    async execute() {

        const cars = await prisma.allCars.findMany();

        return cars;
    }
}

export default GetCarsService;