export interface ICar {
    modelo_id: number;
    ano: number;
    combustivel: string;
    num_portas: number;
    cor: string;
    nome_modelo: string;
    valor: number;
}

export interface ICarBrand extends ICar {
    brand: number;
}