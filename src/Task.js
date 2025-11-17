export class Task {
  #taskStatus

  markAsComplete() {
    this.#taskStatus = true
  }
  markAsIncomplete() {
    this.#taskStatus = false
  }

  getTaskStatus() {
    return this.#taskStatus
  }
}
