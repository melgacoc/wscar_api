import prisma from "../prisma";
import { ICarBrand } from "../interfaces/carInterface";

class CreateCarByBrandService {
    async execute({
        modelo_id,
        ano,
        combustivel,
        num_portas,
        cor,
        nome_modelo,
        valor,
        brand
    }: ICarBrand) {

        const lastCar = await prisma.carsByBrand.findFirst({
            orderBy: {
              id: 'desc'
            }
          });
      
          let nextCarNumber = 1;
          if (lastCar) {
            nextCarNumber = lastCar.car_number + 1;
          }

        const timestamp_cadastro = Date.now();

        const newCar = await prisma.carsByBrand.create({
            data: {
                timestamp_cadastro,
                modelo_id,
                car_number: nextCarNumber,
                ano,
                combustivel,
                num_portas,
                cor,
                nome_modelo,
                valor,
                brand
            }
        });

        return newCar;
    }
}

export default CreateCarByBrandService;