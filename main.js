var $testText = document.getElementById('test-text')
var $container = document.getElementById('container')

function stringToSpannedLetters(string) {
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

function displayResults(score, testLength) {
  var scorePercent = score / testLength * 100
  var $results = document.getElementById('test-results-score')
  $results.textContent = 'You scored ' + score + '/' + testLength + ' characters typed correctly. That\'s ' + Math.floor(scorePercent) + '% correct.'
  var $comment = document.getElementById('test-results-comment')
  console.log(scorePercent)
  switch (true) {
    case (scorePercent === 0):
      $comment.textContent = 'Well done! You successfully mistyped every letter.'
      break
    case (scorePercent < 50 && scorePercent !== 0):
      $comment.textContent = 'Really? Couldn\'t get half right? Do you even homerow?'
      break
    case (scorePercent >= 50 && scorePercent < 75):
      $comment.textContent = 'Not good enough.'
      break
    case (scorePercent >= 75 && scorePercent < 90):
      $comment.textContent = 'Decent, but not terribly impressive. Try again.'
      break
    case (scorePercent >= 90 && scorePercent < 100):
      $comment.textContent = 'Now we\'re talking. But can you get a perfect score?'
      break
    case (scorePercent === 100):
      $comment.textContent = 'What a tryhard. Well done, I guess.'
      break
    default:
      $comment.textContent = 'My name is ERROR'
      break
  }
}

function main() {
  var testText = $testText.textContent
  var $spannedLetters = stringToSpannedLetters($testText.textContent)
  $container.replaceChild($spannedLetters, $testText)
  document.addEventListener('DOMContentLoaded', function() {
    selectLetter(0)
  })
  var testTextIndex = 0
  var score = 0

  var keypressHandler = function(event) {
    if (event.key !== 'Shift') {
      score += checkInput(testText, event.key, testTextIndex)
      testTextIndex++
      console.log(testTextIndex, testText.length)
      if (testTextIndex < testText.length) {
        selectLetter(testTextIndex)
      }
      else {
        console.log('DONEZO')
        document.removeEventListener('keydown', keypressHandler)
        displayResults(score, testText.length)
      }
    }
  }

  document.addEventListener('keydown', keypressHandler)
}

main()
