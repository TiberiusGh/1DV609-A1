import { Task } from '../Task'

describe('Task class test suite', () => {
  test('Task class should exist', () => {
    // Arrange
    const task = new Task()

    // Act

    // Assert
    expect(task).toBeDefined()
  })
})
