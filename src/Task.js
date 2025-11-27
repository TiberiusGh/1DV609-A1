export class Task {
  #title
  #priority
  #completed

  constructor({ title, priority, completed }) {
    this.#title = title
    this.#priority = priority
    this.#completed = completed
  }

  markAsComplete() {
    this.#completed = true
  }
  markAsIncomplete() {
    this.#completed = false
  }

  getTitle() {
    return this.#title
  }

  getPriority() {
    return this.#priority
  }

  getIsCompleted() {
    return this.#completed
  }
}
