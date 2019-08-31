
var words = ['eneagrama','rise','pnl','trabajo','equipo'].map(word => WordFindGame.insertWordBefore($('#add-word').parent(), word))
game = new WordFindGame('#puzzle', {
  allowedMissingWords: 2,
  fillBlanks: true,
  maxAttempts: 100,
});
wordfind.print(game)
if (window.game) {
  var emptySquaresCount = WordFindGame.emptySquaresCount()
  $('#result-message').text(`😃 ${emptySquaresCount ? 'but there are empty squares' : ''}`).css({
    color: ''
  })
}
window.game = game

$(document).ready(function() {
  $('input.word').attr('readonly', 'readonly')
});
