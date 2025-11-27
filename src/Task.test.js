import { Task } from './Task'

describe('Task class test suite', () => {
  test('Task should be marked as complete even if markAsComplete() is called multiple times', () => {
    // Arrange
    taskDataStructure = { title: 'title', priority: 'low', completed: true }
    const task = new Task(taskDataStructure)

    // Act
    task.markAsComplete()
    task.markAsComplete()

    // Assert
    expect(task.getIsCompleted()).toBe(true)
  })

  test('Task should be marked as incomplete even if markAsIncomplete() is called multiple times', () => {
    // Arrange
    const taskDataStructure = {
      title: 'title',
      priority: 'low',
      completed: true
    }
    const task = new Task(taskDataStructure)

    // Act
    task.markAsIncomplete()
    task.markAsIncomplete()
    task.markAsIncomplete()

    // Assert
    expect(task.getIsCompleted()).toBe(false)
  })

  // I know that it's a good rule of thumb to have one assertion per test but i believe mulltiple assertions are better in this case for two reasons:

  // 1. I still test one logical part of the class, It's getters and thus testing a semantic part of the code by verifying multiple syntactic parts

  // 2. If instead create tests for one getters at a time it will be imposible for me to later commit green since the earlier test will fail. This will lead to me needing to change multiple test to accustom the introduction of new attributes passed in the constructor
  test('getters should return the correct value when called', () => {
    // Arrange
    const taskDataStructure = {
      title: 'Correct title',
      priority: 'medium',
      completed: true
    }
    // Easyer to just create a real instance than create a mock
    const SUT = new Task(taskDataStructure)

    // Act

    // Assert
    expect(SUT.getTitle()).toBe('Correct title')
    expect(SUT.getPriority()).toBe('medium')
    expect(SUT.getIsCompleted()).toBe(true)
  })
})
