import { Task } from './Task'

describe('Task class test suite', () => {
  test('Task class should exist', () => {
    // Arrange
    const task = new Task()

    // Act

    // Assert
    expect(task).toBeDefined()
  })

  test('Task should be marked as complete even if markAsComplete() is called multiple times', () => {
    // Arrange
    const task = new Task()

    // Act
    task.markAsComplete()
    task.markAsComplete()

    // Assert
    expect(task.getTaskStatus()).toBe(true)
  })

  test('Task should be marked as incomplete even if markAsIncomplete() is called multiple times', () => {
    // Arrange
    const task = new Task()

    // Act
    task.markAsIncomplete()
    task.markAsIncomplete()
    task.markAsIncomplete()

    // Assert
    expect(task.getTaskStatus()).toBe(false)
  })
})
