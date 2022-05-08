export default function() {
  
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  let bgAudio = new Audio()



  bgAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }
  function audioStart(element) {
    switch (element) {
      case "FLOREST":
        bgAudio = new Audio("../audio/Floresta.wav?raw=true")
        break;
      case "RAIN":
        bgAudio = new Audio("../audio/Floresta.wav?raw=true")
        break;
      case "PEOPLE":
        bgAudio = new Audio("../audio/Floresta.wav")
        break;
      case "FIRE":
        bgAudio = new Audio("../audio/Floresta.wav")
        break;
      default:
        break;
    }
    bgAudio.play();
  }
function audioStop(){
  bgAudio.pause();
}
  return {
    pressButton,
    timeEnd,
    bgAudio,
    audioStart,
    audioStop,
  }

}