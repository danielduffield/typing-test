var $testText = document.getElementById('test-text')

function stringToSpannedLetters(string){
  var $spannedLetters
  $spannedLetters = document.createElement('div')
  for (let i = 0; i < string.length; i++) {
    var $letterSpan
    $letterSpan = document.createElement('span')
    $letterSpan.textContent = string[i]
    $letterSpan.setAttribute('id', 'letter-' + i)
    $spannedLetters.appendChild($letterSpan)
  }
  return $spannedLetters
}

function selectLetter(index) {
  var selectedLetter = document.getElementById('letter-' + index)
  selectedLetter.setAttribute('class', 'selected')
}
