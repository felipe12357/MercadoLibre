import { Request, Response } from 'express';
import { QueryType } from './itemTypes';
import { validationResult } from 'express-validator';
import getItemListUseCase from '../../application/usecases/getItemList.usecase';
import getItemUseCase from '../../application/usecases/getItem.usecase';


export const getItemListController = async (req: Request, res: Response):Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }else{
    try {
        const param = req.query as QueryType;
        const usuarios = await getItemListUseCase(param.search);
        res.json(usuarios);
      } catch (error) {
        res.status(500).json({ message: 'Error on getting item list ' });
      }
  }
};

export const getItemController = async (req: Request, res: Response):Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }else{
    try {
        const param = req.params['id']
        const usuarios = await getItemUseCase(param);
        res.json(usuarios);
      } catch (error) {
        res.status(500).json({ message: 'Error on getting item' });
      }
  }
};

