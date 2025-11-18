import { TaskRepository } from './TaskRepository'

describe('TaskRepository class test suite', () => {
  test('TaskRepository class should exist', () => {
    // Arrange
    const taskRepository = new TaskRepository()

    // Act

    // Assert
    expect(taskRepository).toBeDefined()
  })
})
