export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  let bgAudio = new Audio();
  const florestAudio = "../audio/Floresta.wav?raw=true";
  const rainAudio = "../audio/Chuva.wav?raw=true";
  const peopleAudio = "../audio/Cafeteria.wav";
  const fireAudio = "../audio/Lareira.wav";
  bgAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }
  function songAlreadyPlaing(song) {
    if(bgAudio == null)
    return false;
    if (song == "FLOREST" && bgAudio.audio == florestAudio) return true;
    if (song =="RAIN" && bgAudio.audio == rainAudio) return true;
    if (song =="PEOPLE" && bgAudio.audio == peopleAudio) return true;
    if (song =="FIRE" && bgAudio.audio == fireAudio) return true;
    // se nao cair em nenhum dos verificadores pausar o audio 
    audioStop();
    return false;
  }
  function audioStart(element) {

    let boolNeedToPause = songAlreadyPlaing(element);
    if ( boolNeedToPause && !bgAudio.paused) {

      audioStop();
      return;
    }

    switch (element) {
      case "FLOREST":
        bgAudio = new Audio(florestAudio);
        bgAudio.audio = florestAudio
        break;
      case "RAIN":
        bgAudio = new Audio(rainAudio);
        bgAudio.audio = rainAudio
        break;
      case "PEOPLE":
        bgAudio = new Audio(peopleAudio);
        bgAudio.audio = peopleAudio
        break;
      case "FIRE":
        bgAudio = new Audio(fireAudio);
        bgAudio.audio = fireAudio
        break;
      default:
        break;
    }
    bgAudio.play();
  }
  function audioStop() {
    bgAudio.pause();
  }
  return {
    pressButton,
    timeEnd,
    bgAudio,
    audioStart,
    audioStop,
  };
}
