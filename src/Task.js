export class Task {
  #taskStatus

  markAsComplete() {
    this.#taskStatus = true
  }

  getTaskStatus() {
    return this.#taskStatus
  }
}
