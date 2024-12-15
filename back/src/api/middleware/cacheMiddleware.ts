import { Request, Response, NextFunction } from 'express';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
const cacheMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const key = req.originalUrl;
    const cachedResponse = cache.get(key);
    if (cachedResponse){
        res.json(cachedResponse);
        return
    }
    else{
        const originalJson = res.json; 
        res.json = (body: any) => {
            cache.set(key, body); 
            return originalJson.call(res, body);
        };
    } 
    next();
  };
export default cacheMiddleware;
