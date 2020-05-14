import { Request, Response } from 'express';
import * as _ from 'lodash';
import  LoginService  from './login-service';
import ResponseHandlers from '../../core/handlers/response-handlers';

class LoginController {

    constructor(){}
     /**
     * @swagger
     * /login/{cpf}:
     *   get:
     *     tags:
     *     - "Login"
     *     summary: "Busca usuário por CPF."
     *     description: Consultar por CPF
     *     produces:
     *       - "application/xml"
     *     parameters:
     *     - name: "cpf"
     *       in: "path"
     *       required: true
     *       type: "bigint"
     *     responses:
     *       200:
     *         description: "Usuário Encontrado."
     *       401:
     *         description: "Erro na consulta por CPF."
     */
    consultaCPF(req: Request, res: Response){
        var retorno = LoginService.getConsultaCPF(req.params.cpf);
        return (retorno)?ResponseHandlers.loginSuccess(res, 'Usuário Exitente.'):ResponseHandlers.loginErro(res, 'Usuário não encontrado!');
    }
}

export default new LoginController();