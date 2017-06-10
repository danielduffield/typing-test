var $testText = document.getElementById('test-text')
var $container = document.getElementById('container')

function stringToSpannedLetters(string){
  var $spannedLetters
  $spannedLetters = document.createElement('div')
  $spannedLetters.setAttribute('id', 'test-text')
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
  selectedLetter.setAttribute('class', 'selected')
}

function checkInput(string, userChar, index) {
  console.log(string, userChar, index)
  if (string[index] === userChar) {
    var $char
    $char = document.getElementById('char-' + index)
    $char.setAttribute('id', 'corrrect')
    console.log('CORRECT')
  }
  else {
    $char = document.getElementById('char-' + index)
    $char.setAttribute('id', 'incorrect')
    console.log('=[')
  }
}

function main(){
  testText = $testText.textContent
  console.log(testText)
  var $spannedLetters = stringToSpannedLetters($testText.textContent)
  console.log($spannedLetters)
  $container.replaceChild($spannedLetters, $testText)
  document.addEventListener('DOMContentLoaded', function(){
    console.log('Dom loaded')
    selectLetter(0)
  })
  testTextIndex = 0
  document.addEventListener('keydown', function(event){
    checkInput(testText, event.key, testTextIndex)
    testTextIndex++
  })
}

main()
