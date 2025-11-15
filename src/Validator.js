export class Validator {
  isTitleCorrect(input) {
    if (input === null || input.length > 50) {
      return false
    } else return !!input
  }
}
