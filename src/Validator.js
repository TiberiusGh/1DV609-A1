export class Validator {
  isTitleCorrect(input) {
    if (input.length > 50) {
      return false
    } else return !!input
  }
}
