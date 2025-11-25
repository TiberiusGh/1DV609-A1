import * as readline from 'node:readline/promises'

export class App {
  #outputLogger
  #input
  #isRunning

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
    this.#isRunning = true

    while (this.#isRunning) {
      this.#displyMenuOptions()

      const userMenuChoice = await this.#input.question('Your input: ')

      if (
        userMenuChoice !== '1' &&
        userMenuChoice !== '2' &&
        userMenuChoice !== '3'
      )
        this.#outputLogger.log('That menu option is not implemented yet')
      this.#isRunning = false
    }
  }

  #displyMenuOptions() {
    this.#outputLogger.log('1. List all saved tasks')
    this.#outputLogger.log('2. Add new task')
    this.#outputLogger.log('3. Exit')
  }
}
