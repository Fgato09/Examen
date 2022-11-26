import { Router } from "express";

import {
    direccion ,
    insertar,
    renderTaskEdit ,
    editTask ,
    deleteTask ,
    doneTask 
}
from '../control/datoscontrol';

const router = Router();
router.get('/', direccion);
router.post('/tasks/add', insertar);
router.get('/edit/:id', renderTaskEdit);
router.post('/edit/:id', editTask);
router.get('/delete/:id', deleteTask );
router.get('/toggleDone/:id', doneTask);
export default router;