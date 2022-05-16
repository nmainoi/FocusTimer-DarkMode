export default function Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonNatureTheme,
  buttonRainTheme,
  buttonPeopleTheme,
  buttonFireTheme,
}) {


function resetSound(){
  buttonNatureTheme.style.backgroundColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--button-default-color');
  buttonRainTheme.style.backgroundColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--button-default-color');
  buttonPeopleTheme.style.backgroundColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--button-default-color');
  buttonFireTheme.style.backgroundColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--button-default-color');

  buttonNatureTheme.classList.remove('select')
  buttonRainTheme.classList.remove('select')
  buttonPeopleTheme.classList.remove('select')
  buttonFireTheme.classList.remove('select')
}
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
    resetSound
  }
}