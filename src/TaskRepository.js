import { StorageManager } from './StorageManager.js'

export class TaskRepository {
  #storageManager
  #tasks = []

  constructor(storageManager = new StorageManager()) {
    this.#storageManager = storageManager
  }

  add(newTask) {
    this.#storageManager.save(newTask)
    this.#tasks.push(newTask)
  }

  getAllTasks() {
    this.#storageManager.load()
    return this.#tasks
  }
}
