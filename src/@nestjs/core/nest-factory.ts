import { Logger } from './logger'
import { NestApplication } from './nest-application'

export class NestFactory {
  static async create(module: any) {
    // 启动Nest应用
    Logger.log('Staring Nest application...', 'NestFactory')
    // 创建Nest实例
    const app = new NestApplication(module)
    return app
  }
}
