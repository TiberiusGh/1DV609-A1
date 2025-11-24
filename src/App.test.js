import { App } from './App'
import { TaskRepository } from './TaskRepository'

describe('App class test suite', () => {
  test('App class should exist', () => {
    // Arrange
    const app = new App()

    // Act

    // Assert
    expect(app).toBeDefined()
  })
})
