import clc from 'cli-color'
// import process from 'node:process'

export class Logger {
  static log(message: string, context: string = '') {
    // 获取当前的时间戳
    const timestamp = new Date().toLocaleString()
    // 获取当前的进程ID
    // const pid = process.pid
    // const.log(`[${clc.green('Nest')}] ${clc.green(pid.toString())} - ${timestamp} ${clc.green('LOG')} [${clc.yellow(context)}] ${clc.green(message)}`)
  }
}
