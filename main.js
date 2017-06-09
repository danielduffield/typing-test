var $testText = getElementById('test-text')

function stringToSpannedLetters(string){
  var $spannedLetters
  $spannedLetters = document.createElement('span')
  for (let i = 0; i < string.length; i++) {
    var $letterSpan
    $letterSpan = document.createElement('span')
    $letterSpan.textContent = string[i]
    $spannedLetters.appendChild($letterSpan)
  }
  return $spannedLetters
}
