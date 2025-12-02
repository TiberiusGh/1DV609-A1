import { Validator } from './Validator.js'

export class Task {
  #title
  #priority
  #completed
  #validator = new Validator()

  constructor({ title, priority, completed = false }) {
    this.#title = this.#validateTitle(title)
    this.#priority = this.#validatePriority(priority)
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

  #validatePriority(priority) {
    const isValid = this.#validator.checkPriority(priority)

    if (isValid) {
      return priority
    } else {
      throw new Error(
        'The priority should be between "low", "medium" or "high"'
      )
    }
  }
}
