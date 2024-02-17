/* 
function play(){
  //step-1: hide the Home screen. to hide the screen add the class hidden to the home section..

  const homeSection = document.getElementById('home-screen')
  homeSection.classList.add('hidden')

  // show the playground
  const playGroundSection = document.getElementById('play-ground')
  playGroundSection.classList.remove('hidden')
} 
*/
 function handleKeyboardKeyUpEvent(event){
  const playerPressed = event.key;
  console.log( 'player pressed', playerPressed)

  // stop the game if pressed 'Esc'
  if(playerPressed === 'Escape'){
    gameOver()
  }

  // console.log('player pressed', playerPressed)

  // get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet')
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPressed, expectedAlphabet)

  // check matched or not
  if(playerPressed === expectedAlphabet){
    // console.log('you got a point')
    // console.log('you pressed correctly')

    // Update score:

    // Normaly ekhane o kora jay abar function o call kora jay...

   /* // 1. get current score
   const currentScoreElement = document.getElementById('current-score');
   const currentScoreText = currentScoreElement.innerText;
   const currentScore = parseInt(currentScoreText)
   console.log(currentScore)*/
    const currentScore = getTextElementValueById('current-score')
    
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore)
  //  // 2. increase the score by 1
  //  const newScore = currentScore + 1;
  //  // 3. show the updated score
  //  currentScore.innerText = newScore;
  
  

    // start a new round
    removeBackgroundColorById(expectedAlphabet)
    continuGame()
  }
  else{
    console.log('you missed a life')

    /*
    // step 1: get current life number
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);*/
    
    const currentLife = getTextElementValueById('current-life')
    const updatedLife = currentLife -1;
    setTextElementValueById('current-life', updatedLife);
    // // step -2: nweLife
    // const newLife = currentLife - 1;

    // // step-3: display the updated life count
    // currentLife.innerText = newLife;

    if(updatedLife === 0){
      gameOver()
    }
  }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continuGame(){
   // step 1 : generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log(alphabet)

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color (button)
  setBackgroundColorById(alphabet)
}


function play(){
  // hide everything show only the playground
  hideElementById('home-screen')
  hideElementById('final-score')
  showElementById('play-ground')

  // reset score and life
  setTextElementValueById('current-life', 5)
  setTextElementValueById('current-score', 0)
  continuGame()
  
}

function gameOver(){
  hideElementById('play-ground')
  showElementById('final-score')
  //update final score
  // 1. get the final score
  const lastScore = getTextElementValueById('current-score')
  setTextElementValueById('game-score', lastScore);
  
  //clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet')
  removeBackgroundColorById(currentAlphabet)

}

