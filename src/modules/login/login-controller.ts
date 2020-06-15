import { Request, Response } from 'express';
import * as _ from 'lodash';
import  LoginService  from './login-service';
import ResponseHandlers from '../../core/handlers/response-handlers';

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
     *         description: "Erro na consulta por CPF ou Saram e ou Senha inválida."
     */
    getConsultaMilitar(req: Request, res: Response){
        var retorno = LoginService.getConsultaMilitar(req.params.valor);
        const lengthTotal = req.params.valor.length;
        if(lengthTotal == 11) var cpf = req.params.valor;
        if(lengthTotal == 7) var saram = req.params.valor;
        if(lengthTotal != 11 && lengthTotal != 7) var senha = req.params.valor;

        if(cpf) return (retorno)?ResponseHandlers.loginSuccess(res, 'ok'):ResponseHandlers.loginErro(res, 'Usuário não encontrado por CPF!');
        if(saram) return (retorno)?ResponseHandlers.loginSuccess(res, 'Consulta Saram OK.'):ResponseHandlers.loginErro(res, 'Usuário não encontrado por Saram!');
        if(senha) return (retorno)?ResponseHandlers.loginSuccess(res, 'Consulta Senha OK.'):ResponseHandlers.loginErro(res, 'Senha não confere!');
    }
}

export default new LoginController();