//Requisitos obrigatórios
export interface ILogin{
    retorno: boolean;
}

export interface ILoginDetail extends ILogin {
    retorno: boolean;
} 

export function getConsultaCPF({ cpf } : any): boolean{
    return cpf;
}