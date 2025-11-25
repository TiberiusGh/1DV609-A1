import * as readline from 'node:readline/promises'
import { Validator } from './Validator'

export class App {
  #outputLogger
  #input
  #isRunning
  #validator = new Validator()

  constructor(output, input) {
    this.#outputLogger = output || console
    this.#input = input || this.#createRealInputDependency()
  }

  async start() {
    this.#isRunning = true

    while (this.#isRunning) {
      this.#displyMenuOptions()

      const userMenuChoice = await this.#input.question('Your input: ')

      const inputIsValid = this.#validator.validateMenuChoice(userMenuChoice)

      if (!inputIsValid)
        this.#outputLogger.log('That menu option is not implemented yet')
      this.#isRunning = false
    }
  }

  #createRealInputDependency() {
    return readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  #displyMenuOptions() {
    this.#outputLogger.log('1. List all saved tasks')
    this.#outputLogger.log('2. Add new task')
    this.#outputLogger.log('3. Exit')
  }
}
