import { StorageManager } from './StorageManager'

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
    return this.#tasks
  }
}
