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
    let validator

    beforeEach(() => {
      validator = new Validator()
    })

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
      const validator = new Validator()

      expect(validator.isTitleCorrect(null)).toBe(false)
    })

    describe('checkPriority() test suite', () => {
      test('Should return true when the priority is "low", "medium" or "high"', () => {
        let validator = new Validator()

        expect(validator.checkPriority('low')).toBe(true)
        expect(validator.checkPriority('medium')).toBe(true)
        expect(validator.checkPriority('high')).toBe(true)
      })

      test('Should return false when the priority is other than "low", "medium" or "high"', () => {
        let validator = new Validator()
        const priority = 'chill'

        expect(validator.checkPriority(priority)).toBe(false)
      })
    })
  })
})
