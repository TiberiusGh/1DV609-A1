import { Validator } from './Validator'

describe('Validator class test suite', () => {
  // Arrange
  let validator

  beforeEach(() => {
    validator = new Validator()
  })

  test('Validator class should exist', () => {
    // Arrange
    // Act

    // Assert
    expect(validator).toBeDefined()
  })

  describe('checkTitle() test suite', () => {
    test('Should return false when title is empty string', () => {
      expect(validator.isTitleCorrect('')).toBe(false)
    })

    test('Should return true when title has content', () => {
      expect(validator.isTitleCorrect('content')).toBe(true)
    })

    test('Should return false when title is longer than 50 characters', () => {
      expect(
        validator.isTitleCorrect(
          'Structuring test can be done trough `triple A`. Arrange'
        )
      ).toBe(false)
    })

    test('Should return false when title is null', () => {
      expect(validator.isTitleCorrect(null)).toBe(false)
    })

    describe('checkPriority() test suite', () => {
      test('Should return true when the priority is "low", "medium" or "high"', () => {
        expect(validator.checkPriority('low')).toBe(true)
        expect(validator.checkPriority('medium')).toBe(true)
        expect(validator.checkPriority('high')).toBe(true)
      })

      test('Should return false when the priority is other than "low", "medium" or "high"', () => {
        const priority = 'wrong priority'

        expect(validator.checkPriority(priority)).toBe(false)
      })
    })
  })
})
