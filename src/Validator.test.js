import { Validator } from './Validator'

describe('Validator class test suite', () => {
  test('Validator class should exist', () => {
    // Arrange
    const validator = new Validator()

    // Act

    // Assert
    expect(validator).toBeDefined()
  })

  const validator = new Validator()

  test('Should throw error when the title is falsy', () => {
    expect(validator.checkTitle()).toThrow(TypeError)
  })
})
