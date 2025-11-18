export class StorageManager {
  #fileSaveInterface

  constructor(fileSaveInterface) {
    this.#fileSaveInterface = fileSaveInterface
  }

  save(task) {
    const jsonFormated = this.#formatToJson(task)
    this.#fileSaveInterface.writeFile('./tasks.json', jsonFormated)
  }

  #formatToJson(input) {
    return JSON.stringify(input, null, 2)
  }
}
