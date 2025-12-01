import { StorageManager } from './StorageManager'
import { expect, jest, test } from '@jest/globals'
import { Task } from './Task'

describe('StorageManager class test suite', () => {
  test('Should save tasks to a JSON file', async () => {
    const fsMock = {
      writeFile: jest.fn().mockResolvedValue()
    }
    const storageManager = new StorageManager(fsMock)
    const taskDataStructure = {
      title: 'title',
      priority: 'low',
      completed: true
    }

    const task = new Task(taskDataStructure)

    await storageManager.save(task)

    expect(fsMock.writeFile).toHaveBeenCalledWith(
      './tasks.json',
      JSON.stringify(task, null, 2)
    )
  })

  test('Should load tasks from a JSON file', async () => {
    // Arrange
    let storedData = null
    const fsMock = {
      writeFile: jest.fn((path, data) => {
        storedData = data
        return Promise.resolve()
      }),
      readFile: jest.fn(() => {
        return Promise.resolve(storedData)
      })
    }
    const storageManager = new StorageManager(fsMock)
    const taskDataStructure = {
      title: 'task title',
      priority: 'low',
      completed: true
    }
    const task = new Task(taskDataStructure)

    // Act
    await storageManager.save([task])

    // Assert
    const loadedTask = await storageManager.load()
    expect(loadedTask[0].getTitle()).toBe('task title')
  })

  test('Should return an empty array when no earlyer saves', async () => {
    const fsMock = {
      readFile: () => {
        return Promise.resolve()
      }
    }
    const storageManager = new StorageManager(fsMock)

    // Assert
    expect(await storageManager.load()).toEqual([])
  })
})
