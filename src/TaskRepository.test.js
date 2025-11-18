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
})
