import {series} from 'async';
import TestAntrag from '../TestAntrag';
import TestApp from '../../../TestApp';
const {exec} = require('child_process');

beforeEach(() => {
    exec('npx sequelize-cli db:seed:undo:all --env "test');
    exec('npx sequelize-cli db:seed:all --env "test');
    let config = require('../../../config/config.json');
    return TestApp.create(config);
});

test('loading antrag works', async () => {
    let model = await TestAntrag.findByPk(1);
    expect(model).not.toBeNull();
    expect(model!.betrieb_nr).toEqual('001141');
});