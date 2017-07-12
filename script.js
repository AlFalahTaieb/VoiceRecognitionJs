  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition=new SpeechRecognition();
  recognition.interimResults=true;

  let p = document.createElement('p');
  const words = document.querySelector('.words')
  words.appendChild(p);

  recognition.addEventListener('result',e=>{
  	// console.log(e.results)
  	const transcript=Array.from(e.results)
  	.map(result=>result[0])
  	.map(result=>result.transcript)
  	.join('')
  	
  	
  	p.textContent = transcript;
 
  	if(e.results[0].isFinal){
  		p=document.createElement('p');
  		words.appendChild(p);
  	}
  	if(transcript.includes('rose')){
  	    document.body.style.background = "#f3f3f3";
  	}
  		if(transcript.includes('blanc')){
document.body.style.backgroundColor = "#AA0000";
  	}

if(transcript.includes('Thibault')){
window.open("https://www.alfelah.com");

  	}
if(transcript.includes('pensif')){
	p.textContent=transcript.replace(/pensif|Pensif |chepa/gi, '🤔');
}

  	console.log(transcript)

  });

recognition.addEventListener('end',recognition.start)


  recognition.start();