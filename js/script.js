
const astro = document.querySelector('.astro');
const alien = document.querySelector('.alien');
const backgroundAudio = document.getElementById('background-audio');
const deadAudio = document.getElementById('dead-audio');
const jumpAudio = document.getElementById('jump-audio');
const startMusic = document.getElementById('start-music');
const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-board');
const end = document.querySelector('.end');
const endClick = document.querySelector('.endClick');
const endLink = document.querySelector('.endLink');
const endAudio = document.getElementById('end-audio');
const lançamento = document.querySelector('#lançamento'); 
const lançamento2 = document.querySelector('#lançamento-2'); 



endLink.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
});

function showGameScreen() {
    startScreen.style.display = 'none';
    alien.style.display = 'none';
    astro.style.display = 'none';
    lançamento.style.display = 'blcok';
    lançamento2.style.display = 'block';
    gameScreen.style.display = 'block';
}

lançamento.addEventListener('click', () => {
   lançamento.style.display = 'none';
   lançamento2.style.display = 'block';
});

lançamento2.addEventListener('click', () => {
   lançamento2.style.display = 'none';
   gameScreen.style.display = 'block';
   alien.style.display = 'block';
   astro.style.display = 'block';
});



startScreen.addEventListener('click', showGameScreen);




function playBackgroundMusic() {
   backgroundAudio.play();
}

function pauseBackgroundMusic() {
   backgroundAudio.pause();
}  

function playdeadAudio() {
   deadAudio.play();
}

function playjumpAudio() {
   jumpAudio.play();
}

function pausejumpAudio(){
   jumpAudio.pause();
}

function playstartMusic(){
   startMusic.play();
}

function pausestartMusic(){
   startMusic.pause();
}

function playendAudio(){
   endAudio.play();
}

const jump = (event) => {
   if (event.keyCode === 32) { 
       astro.classList.add('jump-astro');
       playjumpAudio();

       setTimeout(() => {
           astro.classList.remove('jump-astro');
       }, 500);
   }
}


const loop =setInterval( ()=> {
    playBackgroundMusic();
    const alienPosition = alien.offsetLeft;
    const astroPosition = +window.getComputedStyle(astro).bottom.replace('px', '');


    if(alienPosition <= 70 && alienPosition > 0 && astroPosition < 60){

       alien.style.animation = 'none';
       alien.style.left = `${alienPosition}px`

       astro.style.animation = 'none';
       astro.style.bottom = `${astroPosition}px`

       astro.src = './assets/death.png';
       astro.style.width = '80px';
       astro.style.bottom = '40px'
       pauseBackgroundMusic();
       playdeadAudio();
       
       
       
       setTimeout(() => {
         end.src = './assets/back-inicial.jpg';
         end.style.display = 'block';
         alien.style.display = 'none';
         astro.style.display = 'none';
         endClick.style.display = 'block';
         endLink.style.display = 'block';
         playendAudio();
     }, 2000);


       clearInterval(loop);
       

    }

}, 10);

document.addEventListener('keydown', jump);  

