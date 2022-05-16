import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  buttonAddTime,
  buttonRemoveTime,
  buttonNatureTheme,
  buttonRainTheme,
  buttonPeopleTheme,
  buttonFireTheme,
  buttonLigthMode,
  buttonDarkMode
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonAddTime,
  buttonRemoveTime,
  buttonNatureTheme,
  buttonRainTheme,
  buttonPeopleTheme,
  buttonFireTheme,
  buttonLigthMode,
  buttonDarkMode
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})
