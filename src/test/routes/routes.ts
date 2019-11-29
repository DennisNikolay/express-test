import * as express from 'express';
import AntragController from '../controllers/AntragController';

const router = express.Router();
const controller = new AntragController();

router.post('/create', controller.create);
router.put('/update', controller.update);
router.delete('/delete/:id', controller.delete);
router.get('/', controller.index);
router.get('/view/:id', controller.view);
router.get('/async', controller.testDoingStuffAsync);

module.exports = router;