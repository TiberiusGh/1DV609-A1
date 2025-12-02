import * as readline from 'node:readline/promises'
import { Validator } from './Validator.js'
import { TaskRepository } from './TaskRepository.js'
import { Task } from './Task.js'

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
      await this.#processMenu()
    }

    if (this.#input.close) {
      this.#input.close()
    }
  }

  async #processMenu() {
    this.#displyMenuOptions()

    const userMenuChoice = await this.#input.question('Your input: ')
    await this.#handleInputMenuChoice(userMenuChoice)
  }

  async #handleInputMenuChoice(menuChoice) {
    const inputIsValid = this.#validator.validateMenuChoice(menuChoice)

    if (!inputIsValid) {
      this.#outputLogger.log('That menu option is not implemented yet')
    } else if (menuChoice === '1') {
      this.#handleDisplayAllTasks()
    } else if (menuChoice === '2') {
      this.#handleAddNewTask()
    } else if (menuChoice === '3') {
      this.#isRunning = false
    }
  }

  async #handleAddNewTask() {
    const title = await this.#input.question('Enter task title: ')
    const priority = await this.#input.question('Enter task priority: ')
  }

  #handleDisplayAllTasks() {
    const tasks = this.#taskRepository.getAllTasks()

    if (tasks.length > 0) {
      this.#displayStoredTasks(tasks)
    } else {
      this.#displayNoStoredTasks()
    }
  }

  #displayNoStoredTasks() {
    this.#outputLogger.log('No tasks stored yet')
  }

  #displayStoredTasks(tasks) {
    for (const task of tasks) {
      const status = task.completed ? '[X]' : '[ ]'

      this.#outputLogger.log(`${status} ${task.title} [${task.priority}]`)
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
    this.#outputLogger.log('')
    this.#outputLogger.log('1. List all saved tasks')
    this.#outputLogger.log('2. Add new task')
    this.#outputLogger.log('3. Exit')
    this.#outputLogger.log('')
  }
}
