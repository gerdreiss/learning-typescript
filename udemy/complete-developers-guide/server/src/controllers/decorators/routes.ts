import { MetadataKeys, HttpMethods } from '.';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
    };
  };
}

export const get = routeBinder(HttpMethods.Get);
export const post = routeBinder(HttpMethods.Post);
export const put = routeBinder(HttpMethods.Put);
export const patch = routeBinder(HttpMethods.Patch);
export const del = routeBinder(HttpMethods.Delete);
