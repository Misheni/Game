function random (max) {
  
  var sluchaynoechislo = 1+ Math.random() * (max + 1);
  sluchaynoechislo = Math.floor(sluchaynoechislo);
  return  sluchaynoechislo;
}


function randomOchki (min, max) {
    var  randomOchki = Math.random() * (max - min) + min;
    randomOchki = Math.floor(randomOchki);
    return  randomOchki;
}

 
 /*================================

     ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ИГРЫ

 ==================================*/


//  <div id = "start-block">
//      <button id ="start-knopka">Начать</button>
//  </div>
 function sozdanieStartBlock() {
           startBlock = document.createElement("div");
           startBlock.id = "start-block";


           startKnopka  = document.createElement("button"); 
           startKnopka.id = "start-knopka";
           startKnopka.innerText = "Go";
      
       startBlock.appendChild(startKnopka);
       igraPole.appendChild(startBlock);
 }


//  <div id = "stars">
//      0
//  </div>

function sozdanieOchkiBlock() {
         stars =  document.createElement("div");
         stars.id = "stars";  
         stars.innerText = 0;


      igraPole.appendChild(stars);
}


// <div id = "lifes">
//      <span></span>
//      <span></span>
//      <span></span>
// </div>

function sozdanieLifesBlock() {
       lifes = document.createElement("div");
       lifes.id = "lifes";
     
  var tekucheeColichestvoLifes = 0;
  while(tekucheeColichestvoLifes < colichestvoLifes) {
       var span = document.createElement("span");
       lifes.appendChild(span);
       tekucheeColichestvoLifes = tekucheeColichestvoLifes+1;
  }
  
  igraPole.appendChild(lifes);

}

 //<h2>Время:  <span id = "timer">5</span></h2>
 function sozdanieTimerBlock() {
          var h2 = document.createElement("h2");
              console.dir(h2);
              h2.innerText = "Время: ";
          
          timerBlock = document.createElement("span");
              timerBlock.id = "timer";
              timerBlock.innerText = "30";
              h2.appendChild(timerBlock);
          infoBlock.appendChild(h2);
 }


 function sozdanieBall() {
    var ball = document.createElement("div");
        ball.id = "ball";
        ball.className = "ball";

    var napravlenie = random(2); //1- left, 2 - right

    if(napravlenie ==1) {
        ball.className = "ball";
        ball.className = "ball left";
    } else {
        ball.className = "ball right";
    }


    ball.onmousemove = function() {

          if (ball.className != "ball ojidaet-udaleniya"){
                ochki = ochki+1;
                  stars.innerText = ochki;
                  ball.style.opacity = "0";
          

              setTimeout(function() {
              ball.remove();
           
              var sushestvuetBall = document.querySelector(".ball");
              if (sushestvuetBall == null){
              var colichestvoBall = random(5);
              var tekucheeColichestvoBall = 0;

              while(tekucheeColichestvoBall < colichestvoBall) {
              sozdanieBall();
              tekucheeColichestvoBall = tekucheeColichestvoBall+1;
              }
              }
             
             }, 200);
          }
             ball.className = "ball ojidaet-udaleniya";
        };  

  
    setTimeout(function() {
       ball.style.top = random(300) + "px";
       ball.style.left = random(500) + "px";

    },200)
 
setTimeout (function() {
      ball.style.transition = "all 0s";
      var timerBall = setInterval(function() {
           ball.style.top = ball.offsetTop + 1 + "px";
           
           if(ball.offsetTop > 400) {
            ball.remove();
            sozdanieBall();
            colichestvoLifes = colichestvoLifes - 1;

            if(colichestvoLifes == 0) {
                konecIgra();
            }

             udalinieLifesBlock();
             sozdanieLifesBlock();
             clearIntarval(timerBall);
           }

      }, 10)

}, 1000);

if(status != "konec") {
    igraPole.appendChild(ball); 
}
  
}


//<div id = "konec-igra">
//         <h2> Игра окончена! </h2>
//         <h3> Вы набрали: 100 очков </h3>
//</div>

function sozdanieKonecIgra() {
     var div = document.createElement("div");
         div.id = "konec-igra";

         var h2 = document.createElement("h2");
             h2.innerText = "Игра окончена!";

         var h3 = document.createElement("h3");
             h3.innerText = "Вы набрали: " + ochki + " очков";

         div.appendChild(h2);
         div.appendChild(h3);

         igraPole.appendChild(div);
         igraPole.appendChild(div);

}

/*==============================
       УДАЛЕНИЕ ЭЛЕМЕНТОВ
===============================*/

function udalenieStartBlock() {
         startBlock.remove();

}

function udalinieLifesBlock() {
         lifes.remove();

}

function udalenieStarsBlock() {
          stars.remove();

}

function ochistitIgraPole() {
     igraPole.innerText = "";

}