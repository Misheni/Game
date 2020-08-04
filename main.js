function start() {
	sozdanieStartBlock();
    sozdanieTimerBlock();

    startKnopka.onclick = nachat;
     
}

function nachat() {
	status = "nachat";
	udalenieStartBlock();
	sozdanieOchkiBlock();
	sozdanieLifesBlock();
    sozdanieBall();
    timerIgra();  
}

start();

function konecIgra() {
	status = "konec";
     udalinieLifesBlock();
     udalenieStarsBlock();
     
     setTimeout(function() { 
        ochistitIgraPole();
        sozdanieKonecIgra();
     },200)
}
    

function timerIgra () {
      var chasy = setInterval(function() {

         timerBlock.innerText = timerBlock.innerText - 1;
         if (timerBlock.innerText == 0) {
         	clearInterval(chasy);
         	konecIgra();
         }

    }, 1000);

}
