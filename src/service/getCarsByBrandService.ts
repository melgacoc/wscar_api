import prisma from "../prisma";

class GetCarByBrandsService {
    async execute() {

        const cars = await prisma.carsByBrand.findMany();

        return cars;
    }
}

export default GetCarByBrandsService;