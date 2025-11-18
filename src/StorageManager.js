export class StorageManager {
  #fileSaveInterface

  constructor(fileSaveInterface) {
    this.#fileSaveInterface = fileSaveInterface
  }

  async save(task) {
    const jsonFormated = this.#formatToJson(task)
    await this.#fileSaveInterface.writeFile('./tasks.json', jsonFormated)
  }

  #formatToJson(input) {
    return JSON.stringify(input, null, 2)
  }

  async load() {
    try {
      const data = await this.#fileSaveInterface.readFile(
        './tasks.json',
        'utf-8'
      )
      return JSON.parse(data)
    } catch (error) {
      return []
    }
  }
}
