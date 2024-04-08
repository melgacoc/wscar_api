import prisma from "../prisma";
import { ICar } from "../interfaces/carInterface";

class CreateCarService {
    async execute({
        modelo_id,
        ano,
        combustivel,
        num_portas,
        cor,
        nome_modelo,
        valor,
    }: ICar) {

        const lastCar = await prisma.allCars.findFirst({
            orderBy: {
              id: 'desc'
            }
          });
      
          let nextCarNumber = 1;
          if (lastCar) {
            nextCarNumber = lastCar.car_number + 1;
          }

        const timestamp_cadastro = Date.now();

        const newCar = await prisma.allCars.create({
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
            }
        });

        return newCar;
    }
}

export default CreateCarService;