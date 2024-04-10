# WS Car API

## Aplicação
Uma API para gerenciar carros.

## Tecnologias
Este projeto foi construído utilizando as seguintes tecnologias

![Typescript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node Badge](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Mongobd Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

### Carros
Modelo de objeto, sendo o campo brand opicional <br>
```typescript
const carData = {
modelo_id: 123,
ano: 2022,
combustivel: "Gasolina",
num_portas: 4,
cor: "Preto",
nome_modelo: "Modelo XYZ",
valor: 25000.00,
brand: 1,
};
```
<br>
<br>
POST (/newCar): Adiciona um novo carro sem brand <br>
POST (/newCarByBrand): Adiciona um novo carro com o atributo brand <br>
GET (/getCars): Lista todos os carros sem brand <br>
GET (/getCarsByBrand): Lista todos os carros que possui o atributo brand <br>

### 
---
## Instalação

Instale as dependências: `npm install`

Crie o arquivo .env e insira a variavel:
```bash
DATABASE_URL="mongodb+srv://melgacoc:melgacoc@database.evegk8u.mongodb.net/database?retryWrites=true&w=majority&appName=database"
```
Se preferir substitua pela url do seu banco de preferência

Suba a aplicação: `npm run dev`
