const palindromeWord = (string) => {
  return string === string.split('').reverse('').join('')
}

const word = 'level'
console.log(palindromeWord(word))
const word1 = 'levels'
console.log(palindromeWord(word1))

