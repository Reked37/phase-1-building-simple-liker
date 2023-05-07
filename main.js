// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal')
modal.className = 'hidden'

document.addEventListener('DOMContentLoaded',()=>{
  const likeGlyphs= document.querySelectorAll('.like-glyph')
  console.log(likeGlyphs)
  likeGlyphs.forEach((glyph)=>{
    glyph.addEventListener('click',(e)=>{
      // e.preventDefault()
      mimicServerCall()
      .then(() => {
        changeHeart((e.target))
      })
      .catch(()=>{
        modal.className =""
       setTimeout(handleModal, 3000)
      })
    })
  })

})

function changeHeart(heartValue){
  console.log('heartValue',heartValue)
  if(heartValue.innerText === EMPTY_HEART){
    heartValue.innerText = FULL_HEART
    heartValue.className ='activated-heart'
    console.log('heart1',heartValue)
  } else if(heartValue.innerText === FULL_HEART){
  heartValue.innerText = EMPTY_HEART
  heartValue.className = ''
  console.log('heart2',heartValue)
  }
}

function handleModal(){
  console.log('modal', modal)
  modal.className = 'hidden'

}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
