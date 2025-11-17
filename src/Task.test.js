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
    test('Task should be marked as complete even if markAsComplete() is called multiple times', () => {
      // Arrange
      const task = new Task()

      // Act
      task.markAsComplete()
      task.markAsComplete()

      // Assert
      expect(task.getTaskStatus()).toBe(true)
    })
  })
})
