import { AuthRouterModule } from './auth/auth-router';
import { UserRouterModule } from './user/user-router';
import { LoginRouterModule } from './login/login-router';

export interface FeatureModuleRouter{
    moduleName: any; //Será passada a referência da class não apenas o nome.
    parser: string;
}

export class ModulesRouterMapper{
    
    public registeredModules: Array<FeatureModuleRouter> = [
        {
            moduleName: AuthRouterModule, 
            parser: 'getRoutesFromModules' 
        },
        {
            moduleName: UserRouterModule, 
            parser: 'getRoutesFromModules' 
        },
        {
            moduleName: LoginRouterModule, 
            parser: 'getRoutesFromModules' 
        }
    ];

    constructor(){}
}
