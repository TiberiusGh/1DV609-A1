import { Task } from './Task'

describe('Task class test suite', () => {
  test('Task class should exist', () => {
    // Arrange
    const task = new Task()

    // Act

    // Assert
    expect(task).toBeDefined()
  })

  describe('markAsComplete() test suite', () => {
    // Arrange
    const task = new Task()
    // Act
    task.markAsComplete()

    // Assert
    expect(task.getTaskStatus()).toBe(true)
  })
})
