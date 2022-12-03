import getResourceWord from "./getResurceWord"
function sendWord(engWord,uaWord,wordWriteBtn,whlBtn,awnswerWord,questionWord,resultW){
    const englendWord = document.querySelector(engWord),
    ukrainianWord = document.querySelector(uaWord),
    writeBtn = document.querySelector(wordWriteBtn);
    const whileBtn = document.querySelector(whlBtn);
     const answWord = document.querySelector(awnswerWord);
     const qustionW = document.querySelector(questionWord);
     const resultWord = document.querySelector(resultW),
    reset = '';
    let engWordSend = '',
        uaWordSend = '';

  let wordsTranslater = {
  }
  let arrRez = getResourceWord()
  let engWords = arrRez[0]
  let uaWords = arrRez[1]
    writeBtn.addEventListener('click',(e) => {
      e.preventDefault()
        engWordSend = englendWord.value
        uaWordSend = ukrainianWord.value
      ukrainianWord.value = reset
      englendWord.value = reset
      let regexpEng = /^[a-zA-Z]+$/;
      let regexpUA = /^[а-яА-Яі]+$/;
      engWordSend = engWordSend.toLowerCase()
      uaWordSend =  uaWordSend.toLowerCase()
      if(regexpEng.test(engWordSend) && regexpUA.test(uaWordSend)){
          wordsTranslater[engWordSend] = uaWordSend
          //send
          const postData = async (url, data) => {
              let res = await fetch(url, {
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: data
              });
          }
              const json = JSON.stringify(wordsTranslater);
              postData('http://localhost:3000/request', json) 
      }
      wordsTranslater = {}
      let result = 0;
      arrRez = getResourceWord()
engWords = arrRez[0]
uaWords = arrRez[1]
    })
    //downForm
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

export default sendWord