var $testText = document.getElementById('test-text')
var $container = document.getElementById('container')

function stringToSpannedLetters(string){
  var $spannedLetters
  $spannedLetters = document.createElement('div')
  $spannedLetters.setAttribute('id', 'test-text')
  $spannedLetters.setAttribute('class', 'test-and-results')
  for (let i = 0; i < string.length; i++) {
    var $letterSpan
    $letterSpan = document.createElement('span')
    $letterSpan.textContent = string[i]
    $letterSpan.setAttribute('id', 'char-' + i)
    $spannedLetters.appendChild($letterSpan)
  }
  return $spannedLetters
}

function selectLetter(index) {
  var selectedLetter = document.getElementById('char-' + index)
  var previousLetter = document.getElementById('char-' + (index - 1))
  console.log(selectedLetter)

  selectedLetter.setAttribute('class', 'selected')
}

function checkInput(string, userChar, index) {
  console.log(string, userChar, index)
  var $char
  if (string[index] === userChar) {
    $char = document.getElementById('char-' + index)
    $char.setAttribute('class', 'correct')
    return 1
  }
  else {
    $char = document.getElementById('char-' + index)
    $char.setAttribute('class', 'incorrect')
    return 0
  }
}

function displayResults() {}

function main(){
  testText = $testText.textContent
  var $spannedLetters = stringToSpannedLetters($testText.textContent)
  $container.replaceChild($spannedLetters, $testText)
  document.addEventListener('DOMContentLoaded', function(){
    selectLetter(0)
  })
  testTextIndex = 0
  var correctCount = 0
  document.addEventListener('keydown', function(event){
    if (event.key !== 'Shift') {
      correctCount += checkInput(testText, event.key, testTextIndex)
      testTextIndex++
      console.log(testTextIndex, testText.length)
      if (testTextIndex < testText.length) {
        selectLetter(testTextIndex)
      }
      else {
        console.log('DONEZO')
      }
    }
  })
}

main()
