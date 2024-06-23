import express from 'express'
import { Logger } from './logger'

export class NestApplication {
  // 内部私有化一个Expreses实例
  private readonly app:Express = express()

  constructor(public readonly module) {
     
  }

  // 配置初始化工作
  async init() {}

  // 启动http服务器
  async listen(port) {
    await this.init()
    // 调用express的listen方法启动一个app服务器, 监听port端口
    this.app.listen(port, () => {
      Logger.log(`Application is running on http://localhost:${port}`, 'NestApplication')
    })
  }
}
