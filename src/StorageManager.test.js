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
})
