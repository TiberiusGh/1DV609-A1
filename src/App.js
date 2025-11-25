import * as readline from 'node:readline/promises'
import { Validator } from './Validator'
import { TaskRepository } from './TaskRepository'

export class App {
  #outputLogger
  #input
  #isRunning
  #validator = new Validator()
  #taskRepository

  constructor(output, input, taskRepository) {
    this.#outputLogger = output || console
    this.#input = input || this.#createRealInputDependency()
    this.#taskRepository =
      taskRepository || this.#createRealTaskRepoDependency()
  }

  async start() {
    this.#isRunning = true

    while (this.#isRunning) {
      this.#displyMenuOptions()

      const userMenuChoice = await this.#input.question('Your input: ')

      const inputIsValid = this.#validator.validateMenuChoice(userMenuChoice)

      if (!inputIsValid) {
        this.#outputLogger.log('That menu option is not implemented yet')
      } else if (userMenuChoice === '1') {
        const tasks = this.#taskRepository.getAllTasks()
        for (const task of tasks) {
          this.#outputLogger.log(task.title)
        }
      }

      this.#isRunning = false
    }
  }

  #createRealInputDependency() {
    return readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  #createRealTaskRepoDependency() {
    return new TaskRepository()
  }

  #displyMenuOptions() {
    this.#outputLogger.log('1. List all saved tasks')
    this.#outputLogger.log('2. Add new task')
    this.#outputLogger.log('3. Exit')
  }
}
