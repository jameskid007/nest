import 'reflect-metadata'

interface ModuleMetaData {
  controllers: Function[]
}

export function Module(metadata: ModuleMetaData) : ClassDecorator{
  return (target: Function) => {
    // TODO
  }
}
