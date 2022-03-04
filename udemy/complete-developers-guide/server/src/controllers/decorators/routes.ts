import 'reflect-metadata';
import { HttpMethods } from './httpmethods';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('method', method, target, key);
      Reflect.defineMetadata('path', path, target, key);
    };
  };
}

export const get = routeBinder(HttpMethods.get);
export const post = routeBinder(HttpMethods.post);
export const put = routeBinder(HttpMethods.put);
export const patch = routeBinder(HttpMethods.patch);
export const del = routeBinder(HttpMethods.del);
