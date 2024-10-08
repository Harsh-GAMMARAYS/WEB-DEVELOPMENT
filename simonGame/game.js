let buttonColours = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let level = 0
let userClickedPattern = []
let started = false

$(document).keydown(function () {
  if (!started) {
    $('h1').text(`Level ${level}`)
    nextSequence()
    started = true
  }
})

$('.btn').click(function () {
  let userChosenColour = $(this).attr('id')
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)
  checkAnswer(userClickedPattern.length - 1)
})

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence()
      }, 1000)
    }
  } else {
    playSound('wrong')
    $('body').addClass('game-over')
    setTimeout(function () {
      $('body').removeClass('game-over')
    }, 200)
    $('#level-title').text('Game Over, Press Any Key to Restart')
    startOver()
  }
}

function nextSequence() {
  userClickedPattern = []
  level++
  $('h1').text(`Level ${level}`)
  let randomNumber = Math.floor(Math.random() * buttonColours.length)
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100)
  playSound(randomChosenColour)
}

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`)
  audio.play()
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass('pressed')

  setTimeout(function () {
    $(`#${currentColor}`).removeClass('pressed')
  }, 100)
}

function startOver() {
  level = 0
  started = false
  gamePattern = []
}