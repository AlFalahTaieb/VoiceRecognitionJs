  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition=new SpeechRecognition();
  recognition.interimResults=true;

  let p = document.createElement('p');
  const word = document.querySelector('.words')
  words.appendChild(p);
  