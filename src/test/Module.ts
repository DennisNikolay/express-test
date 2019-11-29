import TestApp from '../TestApp';

const env = process.env.NODE_ENV || 'development';

export class Module{

    public static bootstrap() {
        if(env === 'test'){
            TestApp.db.addModels([
                __dirname + '/models/TestAntrag.ts',
                __dirname + '/models/TestPosition.ts'
            ]);
        }else{
            TestApp.db.addModels([
                __dirname + '/models/TestAntrag.js',
                __dirname + '/models/TestPosition.js'
            ]);
        }
        if(TestApp.app)
            TestApp.app!.use('/test', require('./routes/routes.js'));
    }

}