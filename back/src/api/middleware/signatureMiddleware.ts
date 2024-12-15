import { Request, Response, NextFunction } from 'express';

export const signatureMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const originalJson = res.json;
    res.json = function (body: any) {
      const respuestaModificada = {
        author:{ name: 'Andres Felipe', lastName:'Tamayo Cortes'},
        ...body,               
      };
      return originalJson.call(this, respuestaModificada);
    };
    next();
  };
  
export default signatureMiddleware;