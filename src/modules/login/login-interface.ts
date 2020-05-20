//Requisitos obrigatórios
export interface ILogin{
    retorno: boolean;
}

export interface ILoginDetail extends ILogin {
    retorno: boolean;
} 

export function getConsultaMilitar({ data } : any): boolean{
    return data;
}