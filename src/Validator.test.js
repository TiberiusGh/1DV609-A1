import { Validator } from './Validator'
import { jest } from '@jest/globals'

describe('Validator class test suite', () => {
  test('Validator class should exist', () => {
    // Arrange
    const validator = new Validator()

    // Act

    // Assert
    expect(validator).toBeDefined()
  })
})
