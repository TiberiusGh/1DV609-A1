import { Validator } from './Validator'

describe('Validator class test suite', () => {
  test('Validator class should exist', () => {
    // Arrange
    const validator = new Validator()

    // Act

    // Assert
    expect(validator).toBeDefined()
  })

  describe('checkTitle() test suite', () => {
    test('Should return false when title is empty string', () => {
      const validator = new Validator()

      expect(validator.isTitleCorrect('')).toBe(false)
    })

    test('Should return true when title has content', () => {
      const validator = new Validator()

      expect(validator.isTitleCorrect('content')).toBe(true)
    })

    test('Should return false when title is longer than 50 characters', () => {
      const validator = new Validator()

      expect(
        validator.isTitleCorrect(
          'Structuring test can be done trough `triple A`. Arrange'
        )
      ).toBe(false)
    })
  })
})
