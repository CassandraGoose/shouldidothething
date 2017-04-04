$(document).ready(function() {
  console.log("ready");

var answerArray = ['Definitely!', 'Absolutely.', 'Do anything but that.', 'NEVER', 'Affirmative', 'fo shizzle', 'Totally!', 'Might as well', 'Certainly Not', 'NO WAY', 'I do not have an answer at this time.', 'Nope']

var min = Math.ceil(0)
var max = Math.floor(11)

// function randomIndex() {
//   return Math.floor(Math.random() * (max - min + 1)) + min)
// }

  $('#thebutton').click(function() {
    $('#answer').empty()
    $('#answer').append(answerArray[(Math.floor(Math.random() * (max - min + 1)) + min)])
  })
})
