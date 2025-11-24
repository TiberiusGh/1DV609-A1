import { App } from './App'
import { jest } from '@jest/globals'

describe('App class test suite', () => {
  test('App class should exist', () => {
    // Arrange
    const app = new App()

    // Act

    // Assert
    expect(app).toBeDefined()
  })

  test('Should display menu options when App is instantiated', async () => {
    // Arrange
    const outputMock = {
      log: jest.fn()
    }
    const app = new App(outputMock)

    // Act
    await app.start()

    // Assert
    expect(outputMock.log).toHaveBeenCalledWith(
      expect.stringContaining('1. List all saved tasks')
    )
    expect(outputMock.log).toHaveBeenCalledWith(
      expect.stringContaining('2. Add new task')
    )
    expect(outputMock.log).toHaveBeenCalledWith(
      expect.stringContaining('3. Exit')
    )
    expect(outputMock.log).toHaveBeenCalledWith(
      expect.stringContaining('Your input:')
    )
  })
})
