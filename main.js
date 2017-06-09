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
  console.log(selectedLetter)
}

function main(){
  var $spannedLetters = stringToSpannedLetters($testText.textContent)
  $container.replaceChild($spannedLetters, $testText)
  document.addEventListener('DOMContentLoaded', function(){
    console.log('Dom loaded')
    selectLetter(0)
  })
}

main()
