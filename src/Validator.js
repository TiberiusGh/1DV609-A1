export class Validator {
  isTitleCorrect(input) {
    if (input === null || input.length > 50) {
      return false
    } else return !!input
  }

  checkPriority(input) {
    if (input === 'low' || input === 'medium' || input === 'high') {
      return true
    } else {
      return false
    }
  }

  validateMenuChoice(input) {
    if (input === '1' || input === '2' || input === '3') {
      return true
    } else {
      return false
    }
  }
}
