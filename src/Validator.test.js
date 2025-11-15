import { Validator } from './Validator'

describe('Validator class test suite', () => {
  test('Validator class should exist', () => {
    // Arrange
    const validator = new Validator()

    // Act

    // Assert
    expect(validator).toBeDefined()
  })

  test('Should throw error when title is empty string', () => {
    const validator = new Validator()

    expect(() => validator.checkTitle('')).toThrow(TypeError)
  })
})
