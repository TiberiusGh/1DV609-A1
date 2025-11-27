export class Task {
  #taskStatus
  #taskTitle

  constructor({ taskTitle = 'Correct title' } = {}) {
    this.#taskTitle = taskTitle
  }

  markAsComplete() {
    this.#taskStatus = true
  }
  markAsIncomplete() {
    this.#taskStatus = false
  }

  getTaskStatus() {
    return this.#taskStatus
  }

  getTitle() {
    return this.#taskTitle
  }
}
