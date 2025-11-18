import { StorageManager } from './StorageManager'

export class TaskRepository {
  #storageManager
  constructor(storageManager = new StorageManager()) {
    this.#storageManager = storageManager
  }

  add(newTask) {
    this.#storageManager.save(newTask)
  }
}
