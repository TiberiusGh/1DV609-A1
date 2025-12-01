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
      const data = await this.#fileSaveInterface.readFile(
        './tasks.json',
        'utf-8'
      )
      const parsedData = JSON.parse(data)
      return parsedData.map((item) => new Task(item))
    } catch (error) {
      console.log(
        'Something went wrong. Here is more about the error: ' + error.message
      )
      return []
    }
  }
}
