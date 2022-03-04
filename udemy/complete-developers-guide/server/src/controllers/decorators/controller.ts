import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { HttpMethods } from './httpmethods';

export function controller(prefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const handler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      const method: HttpMethods = Reflect.getMetadata(
        'method',
        target.prototype,
        key
      );

      if (path && method) {
        router[method](prefix + path, handler);
      }
    }
  };
}
