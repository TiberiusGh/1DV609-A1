import { Task } from './Task.js'
import { promises as fs } from 'node:fs'

export class StorageManager {
  #fileSaveInterface

  constructor(fileSaveInterface = fs) {
    this.#fileSaveInterface = fileSaveInterface
  }

  async save(task) {
    const jsonFormated = this.#formatToJson(task)
    await this.#fileSaveInterface.writeFile('./tasks.json', jsonFormated)
  }

  #formatToJson(input) {
    return JSON.stringify(input, null, 2)
  }

  async load() {
    try {
      return await this.#tryToLoadTasks()
    } catch (error) {
      return await this.#handleFailToLoadTasks()
    }
  }

  async #tryToLoadTasks() {
    const data = await this.#fileSaveInterface.readFile('./tasks.json', 'utf-8')
    const parsedData = JSON.parse(data)
    return parsedData.map((item) => new Task(item))
  }

  async #handleFailToLoadTasks(error) {
    // Missing file could be one of the reason of failing. More assertions of the error must be added
    await this.#fileSaveInterface.writeFile('./tasks.json', '[]')
    return []
  }
}
