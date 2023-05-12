function start() {
    speak()
    console.log("start");
}

function speak() {
    var synth = window.speechSynthesis;
    speakdata = "happy birthday jackypoo";
    var otherthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(otherthis);
    console.log("success");
  }



