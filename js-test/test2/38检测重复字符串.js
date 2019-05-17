function containsRepeatingLetter(str) {
   return /([a-zA-Z])\1/.test(str)
}