import { StorageManager } from './StorageManager.js'

export class TaskRepository {
  #storageManager

  constructor(storageManager = new StorageManager()) {
    this.#storageManager = storageManager
  }

  async add(newTask) {
    const tasks = await this.#storageManager.load()
    tasks.push(newTask)
    await this.#storageManager.save(tasks)
  }

  async getAllTasks() {
    return await this.#storageManager.load()
  }
}
