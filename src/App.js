import * as readline from 'node:readline/promises'

export class App {
  #outputLogger
  #input

  constructor(output, input) {
    this.#outputLogger = output || console
    this.#input =
      input ||
      readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
  }

  async start() {
    this.#outputLogger.log('1. List all saved tasks')
    this.#outputLogger.log('2. Add new task')
    this.#outputLogger.log('3. Exit')
    this.#outputLogger.log('Your input:')

    const input = await this.#input.question('Your input: ')
    console.log(input)
  }
}
