import { Request, Response } from 'express';
import * as _ from 'lodash';
import  LoginService  from './login-service';
import ResponseHandlers from '../../core/handlers/response-handlers';
import * as HTTPStatus from 'http-status';

class LoginController {

    constructor(){}
     /**
     * @swagger
     * /login/consulta:
     *   get:
     *     tags:
     *     - "Login"
     *     summary: "Busca usuário por Saram ou CPF. Deve ser informado dados no body da Req. Vaslida senha no LDAP."
     *     description: Consultar por Saram ou CPF. Vaslida senha no LDAP.
     *     produces:
     *       - "application/xml"
     *     parameters:
     *     - name: "cpf"
     *       in: "body"
     *       required: false
     *       type: "bigint"
     *     - name: "senha"
     *       in: "body"
     *       required: false
     *       type: "bigint"
     *     - name: "senha"
     *       in: "body"
     *       required: false
     *       type: "string"
     *     responses:
     *       200:
     *         description: "Usuário Encontrado por CPF ou Saram. Senha Válida"
     *       401:
     *         description: "Erro na consulta por CPF na base local. SIGPES Fora do Ar!"
     */
     
    getConsultaMilitar(req: Request, res: Response){
        let valor = req.params.valor;
        const lengthTotal = valor.length;
        
        LoginService.getConsultaMilitar(req.params.valor, function (status){
            res.status(status);
            res.setHeader('Content-Type', 'application/json');
            console.log(`Estatus Code Final Controller = ${res.statusCode}`);
            if(lengthTotal == 11){
                if(status == 200 || status == 201 || status == 300) return ResponseHandlers.loginSuccess(res,'CPF encontrado na base.', status); 
                else return ResponseHandlers.loginErro(res,'Erro do servidor CPF!', status);
            } 
            if(lengthTotal == 7){
                if(status == 200 || status == 201 || status == 300) return ResponseHandlers.loginSuccess(res,'Saram encontrado na base.', status); 
                else return ResponseHandlers.loginErro(res,'Erro do servidor Saram!', status);
            } 
            if(lengthTotal != 11 && lengthTotal != 7){
                if(status == 200 || status == 201 || status == 300) return ResponseHandlers.loginSuccess(res,'Senha encontrado na base.', status); 
                else return ResponseHandlers.loginErro(res,'Erro do servidor Senha!', status);
            } 
        });
    } 
}
export default new LoginController();

/*

100	Continue	Continuar
101	Switching Protocols	Mudando Protocolos
102	Processing	Processando
200	Ok	Ok
201	Created	Criado
202	Accepted	Aceito
203	Non-Authoritative Information	Não autorizado
204	No Content	Nenhum Conteúdo
205	Reset Content	Resetar Conteúdo
206	Partial Content	Conteúdo Parcial
300	Multiple Choices	Múltipla Escolha
301	Moved Permanently	Movido Permanentemente
302	Found	Encontrado
303	See Other	Veja outro
304	Not Modified	Não modificado
305	Use Proxy	Use Proxy
306	Proxy Switch	Proxy Trocado
400	Bad Request	Solicitação Inválida
401	Unauthorized	Não autorizado
402	Payment Required	Pagamento necessário
403	Forbidden 	Proibido
404	Not Found	Não encontrado
405	Method Not Allowed	Método não permitido
406	Not Acceptable	Não aceito
407	Proxy Authentication Required	Autenticação de Proxy Necessária
408	Request Time-out	Tempo de solicitação esgotado
409	Conflict	Conflito
410	Gone	Perdido
411	Length Required	Duração necessária
412	Precondition Failed	Falha de pré-condição
413	Request Entity Too Large	Solicitação da entidade muito extensa
414	Request-URL Too Large	Solicitação de URL muito Longa
415	Unsupported Media Type	Tipo de mídia não suportado
416	Request Range Not Satisfiable	Solicitação de faixa não satisfatória
417	Expectation Failed	Falha na expectativa
500	Internal Server Error	Erro do Servidor Interno
501	Not Implemented	Não implementado
502	Bad Gateway 	Porta de entrada ruim
503	Service Unavailable 	Serviço Indisponível
504	Gateway Time-out	Tempo limite da Porta de Entrada
505	HTTP Version Not Supported 	Versão HTTP não suportada


*/