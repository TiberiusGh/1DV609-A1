import { Task } from './Task'
import { TaskRepository } from './TaskRepository'
import { expect, jest, test } from '@jest/globals'

describe('TaskRepository class test suite', () => {
  test('Should be able to add new tasks', async () => {
    // Arrange
    const taskDataStructure = {
      title: 'title',
      priority: 'low',
      completed: true
    }
    const task = new Task(taskDataStructure)
    const storageManagerMock = {
      save: jest.fn(),
      load: jest.fn().mockResolvedValue([])
    }
    const taskRepository = new TaskRepository(storageManagerMock)

    // Act
    await taskRepository.add(task)

    // Assert
    expect(storageManagerMock.save).toHaveBeenCalledWith([task])
  })

  test('Should be able to save and retrieve the same tasks', async () => {
    // Arrange
    const taskDataStructure = {
      title: 'title',
      priority: 'low',
      completed: true
    }
    const task1 = new Task(taskDataStructure)
    const task2 = new Task(taskDataStructure)
    const task3 = new Task(taskDataStructure)
    let savedTasks = []
    const storageManagerMock = {
      save: jest.fn().mockImplementation((tasks) => {
        savedTasks = tasks
        return Promise.resolve()
      }),
      load: jest.fn().mockImplementation(() => {
        return Promise.resolve(savedTasks)
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

  test('Should load stored tasks from injected StoredManager', async () => {
    const storageManagerMock = {
      load: jest.fn().mockResolvedValue([])
    }
    const taskRepository = new TaskRepository(storageManagerMock)

    taskRepository.getAllTasks()

    expect(storageManagerMock.load).toHaveBeenCalledTimes(1)
  })
})
