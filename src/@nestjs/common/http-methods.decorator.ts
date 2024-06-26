import 'reflect-metadata'

export function Get(): MethodDecorator {
  return (target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) => { }
}
