//Requisitos obrigatórios
export interface IOM{
    readonly id_om: number;
    nome_om: string;
    sg_om: string;
    status: string;
}

export interface IOMDetail extends IOM {
    readonly id_om: number;
    nome_om: string;
    sg_om: string;
    status: string;
} 

export function createOM({id_om, nome_om, sg_om, status}: any): IOM{
    return { id_om, nome_om, sg_om, status }
}
export function createOMs(data: any[]): IOM[]{ //Criar Várias Om's
    return data.map(createOM)
}
export function createOMById({id_om, nome_om, sg_om, status}: any): IOMDetail{
    return { id_om, nome_om, sg_om, status }
}