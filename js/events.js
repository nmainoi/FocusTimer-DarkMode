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
  buttonLigthMode,
  buttonDarkMode
} from "./elements.js";

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonRemoveTime.addEventListener("click", function () {
    sound.pressButton();
    timer.removeMinutes(5);
  });

  buttonAddTime.addEventListener("click", function () {
    sound.pressButton();
    timer.addMinutes(5);
  });

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonNatureTheme.addEventListener("click", function () {
    controls.resetSound();
    sound.audioStart("FLOREST");
  });

  buttonFireTheme.addEventListener("click", function () {
    controls.resetSound();
    sound.audioStart("FIRE");
  });

  buttonRainTheme.addEventListener("click", function () {
    controls.resetSound();
    sound.audioStart("RAIN");
  });
  buttonPeopleTheme.addEventListener("click", function () {
    controls.resetSound();
    sound.audioStart("PEOPLE");
  });

  buttonLigthMode.addEventListener("click", function(){
    controls.setDarkMode();
  })
  
  buttonDarkMode.addEventListener("click", function(){
    controls.setLigthMode();
  })
}
