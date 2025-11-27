import { Task } from './Task'
import { TaskRepository } from './TaskRepository'
import { expect, jest, test } from '@jest/globals'

describe('TaskRepository class test suite', () => {
  test('Should be able to add new tasks', () => {
    // Arrange
    const task = new Task()
    const storageManagerMock = {
      save: jest.fn()
    }
    const taskRepository = new TaskRepository(storageManagerMock)

    // Act
    taskRepository.add(task)

    // Assert
    expect(storageManagerMock.save).toHaveBeenCalledWith(task)
  })

  test('Should be able to save and retrieve the same tasks', async () => {
    // Arrange
    const task1 = new Task()
    const task2 = new Task()
    const task3 = new Task()
    let savedTasks = []
    const storageManagerMock = {
      save: jest.fn().mockImplementation((tasks) => {
        savedTasks.push(tasks)
      }),
      load: jest.fn().mockImplementation(() => {
        return savedTasks
      })
    }
    const taskRepository = new TaskRepository(storageManagerMock)

    // Act
    taskRepository.add(task1)
    taskRepository.add(task2)
    taskRepository.add(task3)

    // Assert
    const result = await taskRepository.getAllTasks()
    expect(result).toEqual([task1, task2, task3])
  })

  test('Should load stored tasks from injected StoredManager', () => {
    const storageManagerMock = {
      load: jest.fn()
    }
    const taskRepository = new TaskRepository(storageManagerMock)

    taskRepository.getAllTasks()

    expect(storageManagerMock.load).toHaveBeenCalledTimes(1)
  })
})
