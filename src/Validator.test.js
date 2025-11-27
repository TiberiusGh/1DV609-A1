import { Validator } from './Validator'

describe('Validator class test suite', () => {
  // Arrange
  let validator

  beforeEach(() => {
    validator = new Validator()
  })

  describe('checkTitle() test suite', () => {
    test('Should return false when title is empty string', () => {
      // Act

      // Assert
      expect(validator.isTitleCorrect('')).toBe(false)
    })

    test('Should return true when title has content', () => {
      // Act

      // Assert
      expect(validator.isTitleCorrect('content')).toBe(true)
    })

    test('Should return false when title is longer than 50 characters', () => {
      // Act

      // Assert
      expect(
        validator.isTitleCorrect(
          'Structuring test can be done trough `triple A`. Arrange'
        )
      ).toBe(false)
    })

    test('Should return false when title is null', () => {
      // Act

      // Assert
      expect(validator.isTitleCorrect(null)).toBe(false)
    })

    describe('checkPriority() test suite', () => {
      test('Should return true when the priority is "low", "medium" or "high"', () => {
        // Act

        // Assert
        expect(validator.checkPriority('low')).toBe(true)
        expect(validator.checkPriority('medium')).toBe(true)
        expect(validator.checkPriority('high')).toBe(true)
      })

      test('Should return false when the priority is other than "low", "medium" or "high"', () => {
        // Act
        const priority = 'wrong priority'

        // Assert
        expect(validator.checkPriority(priority)).toBe(false)
      })
    })
  })

  describe('validateMenuChoice() test suite', () => {
    test('returns false when wrong menu option is called', () => {
      // Act

      // Assert
      expect(validator.validateMenuChoice('0')).toBe(false)
      expect(validator.validateMenuChoice('4')).toBe(false)
      expect(validator.validateMenuChoice('a')).toBe(false)
    })

    test('returns true when correct menu option is called', () => {
      // Act

      // Assert
      expect(validator.validateMenuChoice('1')).toBe(true)
      expect(validator.validateMenuChoice('2')).toBe(true)
      expect(validator.validateMenuChoice('3')).toBe(true)
    })
  })
})
