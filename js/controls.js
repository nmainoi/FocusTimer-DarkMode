export default function Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonNatureTheme,
  buttonRainTheme,
  buttonPeopleTheme,
  buttonFireTheme,
  buttonLigthMode,
  buttonDarkMode
}) {

function resetInjectedBG(){

}

function resetSound(){

  resetInjectedBG()
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

function setLigthMode(){
  buttonLigthMode.classList.remove('hide')
  buttonDarkMode.classList.add('hide')

  document.documentElement.style.setProperty('--bg-color', 'white')
  document.documentElement.style.setProperty('--text-color', '#323238')  
  document.documentElement.style.setProperty('--button-selected-color', '#02799D') 
  document.documentElement.style.setProperty('--button-default-color', '#E1E1E6')  
  document.documentElement.style.setProperty('--slider-default-color', '#323238') 
  document.documentElement.style.setProperty('--slider-selected-color', '#ffffffe5')  
  resetInjectedBG()
} 
  
function setDarkMode(){

  buttonLigthMode.classList.add('hide')
  buttonDarkMode.classList.remove('hide')

  document.documentElement.style.setProperty('--bg-color', 'black')
  document.documentElement.style.setProperty('--text-color', '#FFFFFF')  
  document.documentElement.style.setProperty('--button-selected-color', '#0A3442') 
  document.documentElement.style.setProperty('--button-default-color', '#29292E')  
  document.documentElement.style.setProperty('  --slider-default-color', '#ffffffe5') 
  document.documentElement.style.setProperty('--slider-selected-color', '#ffffffe5')  
  resetInjectedBG()
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
    resetSound,
    setDarkMode,
    setLigthMode
  }
}