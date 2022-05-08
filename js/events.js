import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonAddTime,
  buttonRemoveTime,
  buttonNatureTheme,
  buttonRainTheme,
  buttonPeopleTheme,
  buttonFireTheme,
} from "./elements.js"

export default function({controls, timer, sound}) {

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonRemoveTime.addEventListener('click', function(){
    sound.pressButton()
    timer.removeMinutes(5)
  })

buttonAddTime.addEventListener('click', function(){
  sound.pressButton()
  timer.addMinutes(5)
})

  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

buttonNatureTheme.addEventListener('click', function(){
sound.audioStart("FLOREST");
})

  // buttonSoundOff.addEventListener('click', function() {
  //   buttonSoundOn.classList.remove('hide')
  //   buttonSoundOff.classList.add('hide')
  //   sound.bgAudio.play()
  // })
  
  // buttonSoundOn.addEventListener('click', function() {
  //   buttonSoundOn.classList.add('hide')
  //   buttonSoundOff.classList.remove('hide')
  //   sound.bgAudio.pause()
  // })



}