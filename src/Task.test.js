import { Task } from './Task'

describe('Task class test suite', () => {
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

  test('getTitle should return the correct title', () => {
    // Arrange
    const tastData = { title: 'Correct title' }
    const SUT = new Task(tastData)

    // Act

    // Assert
    expect(SUT.getTitle()).toBe('Correct title')
  })
})
