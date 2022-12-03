
function wordChecker(){
let engWords = [];
let uaWords = [];
getResourceWord()

 const whileBtn = document.querySelector('#while-btn');
 const answWord = document.querySelector('#answer-word');
 const qustionW = document.querySelector('#question-word');
 const resultWord = document.querySelector('#result-word')
 let index = -1;
 let result = 0;
 whileBtn.addEventListener('click',(e) => {
  e.preventDefault()
  if(whileBtn.textContent == 'Спробувати знову'){
      index = -1
      resultWord.innerHTML = ''
      result = 0
    }
      whileBtn.innerHTML = 'Далі'
  if(index+1 < engWords.length){
  qustionW.innerHTML = engWords[index+1]
  }      
    if(answWord.value == uaWords[index]){
     result++
    }
    index++
    if(index >= engWords.length){
      whileBtn.innerHTML = 'Спробувати знову'
      resultWord.innerHTML = `Ви відповіли правильно на ${result} питання з ${index}`
    }
    answWord.value = ''
 })
}
 export default wordChecker