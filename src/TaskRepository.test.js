import { Task } from './Task'
import { TaskRepository } from './TaskRepository'
import { expect, jest, test } from '@jest/globals'

describe('TaskRepository class test suite', () => {
  test('TaskRepository class should exist', () => {
    // Arrange
    const taskRepository = new TaskRepository()

    // Act

    // Assert
    expect(taskRepository).toBeDefined()
  })

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

  test('Should be able to retrieve all stored tasks', () => {
    // Arrange
    const task1 = new Task()
    const task2 = new Task()
    const task3 = new Task()
    const storageManagerMock = {
      save: jest.fn(),
      load: jest.fn().mockRejectedValue([task1, task2, task3])
    }
    const taskRepository = new TaskRepository(storageManagerMock)

    // Act
    taskRepository.add(task1)
    taskRepository.add(task2)
    taskRepository.add(task3)

    // Assert
    expect(taskRepository.getAllTasks()).toEqual([task1, task2, task3])
  })
})
