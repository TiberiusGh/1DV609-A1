import { App } from './App.js'
import { Task } from './Task.js'
import { expect, jest, test } from '@jest/globals'

describe('App class test suite', () => {
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
    expect(outputMock.log).toHaveBeenCalledTimes(5)
    expect(outputMock.log).toHaveBeenNthCalledWith(1, '')
    expect(outputMock.log).toHaveBeenNthCalledWith(2, '1. List all saved tasks')
    expect(outputMock.log).toHaveBeenNthCalledWith(3, '2. Add new task')
    expect(outputMock.log).toHaveBeenNthCalledWith(4, '3. Exit')
    expect(outputMock.log).toHaveBeenNthCalledWith(5, '')
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

  test('Should prompt user for task title when menu option 2 is selected', async () => {
    // Arrange
    const outputMock = { log: jest.fn() }
    const inputMock = {
      question: jest
        .fn()
        .mockResolvedValueOnce('2')
        .mockResolvedValueOnce('Ga till skolan')
        .mockResolvedValueOnce('high')
        .mockResolvedValueOnce('3'),
      close: jest.fn()
    }
    const taskRepositoryMock = {
      getAllTasks: jest.fn().mockResolvedValue([]),
      add: jest.fn().mockResolvedValue()
    }
    const app = new App(outputMock, inputMock, taskRepositoryMock)

    // Act
    await app.start()

    // Assert
    expect(inputMock.question).toHaveBeenCalledWith('Enter task title: ')
    expect(inputMock.question).toHaveBeenCalledWith('Enter task priority: ')
  })

  test('When adding a task trough menu option 2 it should save the task to file', async () => {
    // Arrange
    const outputMock = { log: jest.fn() }
    const inputMock = {
      question: jest
        .fn()
        .mockResolvedValueOnce('2')
        .mockResolvedValueOnce('Ga till skolan')
        .mockResolvedValueOnce('high')
        .mockResolvedValueOnce('3'),
      close: jest.fn()
    }
    const taskRepositoryMock = {
      getAllTasks: jest.fn().mockResolvedValue([]),
      add: jest.fn().mockResolvedValue()
    }
    const app = new App(outputMock, inputMock, taskRepositoryMock)

    // Act
    await app.start()

    // Assert
    expect(taskRepositoryMock.add).toHaveBeenCalledTimes(1)
    expect(taskRepositoryMock.add).toHaveBeenCalledWith(expect.any(Task))
  })
})
