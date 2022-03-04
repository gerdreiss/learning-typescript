import { NextFunction, Request, RequestHandler, Response } from 'express';
import 'reflect-metadata';
import { AppRouter, HttpMethods, MetadataKeys } from '.';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    // if (!req.body) {
    //   res.status(422).send('Invalid request - no body');
    // } else {
    //   for (let key of keys) {
    //     if (!req.body[key]) {
    //       res.status(422).send(`Invalid request - field '${key}' missing`);
    //     }
    //   }
    // }
    // next();
    if (req.body && keys.every((key) => req.body[key])) next();
    else res.status(422).send('Invalid request - no body, or missing mandatory fields');
  };
}

export function controller(prefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const method: HttpMethods =
        Reflect.getMetadata(MetadataKeys.Method, target.prototype, key) || HttpMethods.Get;
      const path = Reflect.getMetadata(MetadataKeys.Path, target.prototype, key) || '/';
      const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) || [];
      const validator = bodyValidators(
        Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) || []
      );
      const handler = target.prototype[key];

      router[method](prefix + path, ...middlewares, validator, handler);
    }
  };
}
