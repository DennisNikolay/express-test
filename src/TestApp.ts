import { Sequelize } from 'sequelize-typescript';
import { Express } from 'express';
import { Module as TestModule} from './test/Module';

const env = process.env.NODE_ENV || 'development';

export default class TestApp{

    public static app:Express|undefined;

    public static db:Sequelize;

    public static create (config: any, app?: Express) {
        TestApp.app = app;
        this.initializeDbConnection(config);
        this.bootstrapModules();
    }

    protected static initializeDbConnection(config: any){
        TestApp.db = new Sequelize(
            config[env].database,
            config[env].username, 
            config[env].password, 
            config[env], 
        );
    }

    protected static bootstrapModules(){
        TestModule.bootstrap();
    }

}