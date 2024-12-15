import { Router } from 'express';
import { check } from 'express-validator';
import { getItemController, getItemListController } from '../controllers/itemController';

const router = Router();


router.get('/items',[
    check('search').notEmpty().withMessage('The parameter search is required')
], getItemListController);


router.get('/items/:id', getItemController);

export default router;