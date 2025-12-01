import { Validator } from './Validator.js'

export class Task {
  #title
  #priority
  #completed
  #validator = new Validator()

  constructor({ title, priority, completed }) {
    this.#title = this.#validateTitle(title)
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

  toJSON() {
    return {
      title: this.getTitle(),
      priority: this.getPriority(),
      completed: this.getIsCompleted()
    }
  }

  #validateTitle(title) {
    const isValid = this.#validator.isTitleCorrect(title)

    if (isValid) {
      return title
    } else {
      throw new Error('The title should be at most 50 characters long')
    }
  }
}
