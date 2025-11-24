export class App {
  #outputLogger

  constructor(output) {
    this.#outputLogger = output || console
  }

  async start() {
    this.#outputLogger.log('1. List all saved tasks')
    this.#outputLogger.log('2. Add new task')
    this.#outputLogger.log('3. Exit')
    this.#outputLogger.log('Your input:')
  }
}
