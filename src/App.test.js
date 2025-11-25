import { App } from './App'
import { expect, jest, test } from '@jest/globals'

describe('App class test suite', () => {
  test('App class should exist', () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const inputMock = {
      question: jest.fn().mockResolvedValue('3')
    }
    const app = new App(outputMock, inputMock)

    // Act

    // Assert
    expect(app).toBeDefined()
  })

  test('Should display menu options when app starts', async () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const inputMock = {
      question: jest.fn().mockResolvedValue('3')
    }
    const app = new App(outputMock, inputMock)

    // Act
    await app.start()

    // Assert
    expect(outputMock.log).toHaveBeenCalledTimes(3)
    expect(outputMock.log).toHaveBeenNthCalledWith(1, '1. List all saved tasks')
    expect(outputMock.log).toHaveBeenNthCalledWith(2, '2. Add new task')
    expect(outputMock.log).toHaveBeenNthCalledWith(3, '3. Exit')
  })

  test('User should be able to input to choose option number 1', async () => {
    // Arrange
    const outputMock = {
      log: jest.fn().mockReturnValue([])
    }
    const inputMock = {
      question: jest.fn().mockResolvedValueOnce('1').mockResolvedValueOnce('3')
    }
    const taskRepositoryMock = {
      getAllTasks: jest.fn().mockReturnValue([])
    }
    const app = new App(outputMock, inputMock, taskRepositoryMock)

    // Act
    await app.start()

    // Assert
    expect(inputMock.question).toHaveBeenCalledTimes(2)
  })

  test('Should display error message when user inputs wrong menu input', async () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const inputMock = {
      question: jest
        .fn()
        .mockResolvedValueOnce('invalid menu choice')
        .mockResolvedValueOnce('3')
    }
    const app = new App(outputMock, inputMock)

    // Act
    await app.start()

    // Assert
    expect(outputMock.log).toHaveBeenCalledWith(
      'That menu option is not implemented yet'
    )
  })

  test('Should display stored tasks when users chooses menu option 1 (List all saved tasks)', async () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const inputMock = {
      question: jest.fn().mockResolvedValueOnce('1').mockResolvedValueOnce('3')
    }
    const mockTasks = [
      { title: 'Buy groceries', priority: 'high', completed: false }
    ]
    const taskRepositoryMock = {
      getAllTasks: jest.fn().mockReturnValue(mockTasks)
    }
    const app = new App(outputMock, inputMock, taskRepositoryMock)

    // Act
    await app.start()

    // Assert
    expect(taskRepositoryMock.getAllTasks).toHaveBeenCalledTimes(1)
    expect(outputMock.log).toHaveBeenCalledWith(
      expect.stringContaining('Buy groceries')
    )
  })

  test('Should exit the app when users chooses menu option 3 (Exit)', async () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const inputMock = {
      question: jest.fn().mockResolvedValueOnce('3')
    }
    const app = new App(outputMock, inputMock)

    // Act
    await app.start()

    // Assert
    expect(inputMock.question).toHaveBeenCalledTimes(1)
  })
})
