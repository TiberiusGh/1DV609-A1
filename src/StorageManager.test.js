import { StorageManager } from './StorageManager'
import { jest } from '@jest/globals'
import { Task } from './Task'

describe('StorageManager class test suite', () => {
  test('StorageManager class should exist', () => {
    // Arrange
    const storageManager = new StorageManager()

    // Act

    // Assert
    expect(storageManager).toBeDefined()
  })

  test('Should save tasks to a JSON file', async () => {
    const fsMock = {
      writeFile: jest.fn().mockResolvedValue()
    }
    const storageManager = new StorageManager(fsMock)
    const task = new Task()

    await storageManager.save(task)

    expect(fsMock.writeFile).toHaveBeenCalledWith(
      './tasks.json',
      JSON.stringify(task, null, 2)
    )
  })

  test('Should load tasks from a JSON file', () => {
    // Arrange
    let storedData = null
    const fsMock = {
      writeFile: (path, data) => {
        storedData = data
      },
      readFile: () => {
        return storedData
      }
    }
    const storageManager = new StorageManager(fsMock)
    const task = new Task()

    // Act
    storageManager.save(task)

    // Assert
    expect(storageManager.load()).toEqual(task)
  })
})
