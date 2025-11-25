import { App } from './App'
import { expect, jest, test } from '@jest/globals'

describe('App class test suite', () => {
  test('App class should exist', () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const inputMock = {
      question: jest.fn().mockResolvedValue('1')
    }
    const app = new App(outputMock, inputMock)

    // Act

    // Assert
    expect(app).toBeDefined()
  })

  test('Should display menu options when App is instantiated', async () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const inputMock = {
      question: jest.fn().mockResolvedValue('1')
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
      log: jest.fn()
    }
    const inputMock = {
      question: jest.fn().mockResolvedValue('1')
    }
    const app = new App(outputMock, inputMock)

    // Act
    await app.start()

    // Assert
    expect(inputMock.question).toHaveBeenCalledTimes(1)
  })

  test('Should display error message when user inputs wrong menu input', async () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const inputMock = {
      question: jest.fn().mockResolvedValueOnce('invalid menu choice')
    }
    const app = new App(outputMock, inputMock)

    // Act
    await app.start()

    // Assert
    expect(outputMock.log).toHaveBeenCalledWith(
      'That menu option is not implemented yet'
    )
  })
})
