import { BaseRouterModule, ModuleEndPointMap } from "../../core/router/base-router-module"
import LoginController from './login-controller';

export class LoginRouterModule extends BaseRouterModule {
    constructor(){
        super('login');
    }
    //GET
    protected MODULES_ENDPOINT_MAP: ModuleEndPointMap = {
        [this.moduleName]: {
            get: [
                {
                    endpoint: `${ this.context }/${this.version}/${this.moduleName}/consultaSIGPES/:valor`,
                    callback: LoginController.getConsultaMilitarSIGPES,
                    isProtected: false
                },
                {
                    endpoint: `${ this.context }/${this.version}/${this.moduleName}/consultaLDAP/`,
                    callback: LoginController.getConsultaMilitarLDAP,
                    isProtected: false
                }
            ]
        }
    };
}