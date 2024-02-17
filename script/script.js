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
  console.log('player pressed', playerPressed)

  // get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet')
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPressed, expectedAlphabet)

  // check matched or not
  if(playerPressed === expectedAlphabet){
    console.log('you got a point')
  }
  else{
    console.log('you missed a life')
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
  hideElementById('home-screen')
  showElementById('play-ground')
  continuGame()
  
}

