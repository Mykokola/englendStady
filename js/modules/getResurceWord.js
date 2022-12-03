function getResourceWord(){
    var engWords = [];
    var uaWords = [];
    let result = []
  const getResource = async (url) =>{
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status:${res.status}`)
    }
    return  res.json()
}
   getResource('http://localhost:3000/request')
   .then(data => {
    for(let i = 0;i < data.length;i++){
        let keyObg = Object.keys(data[i])[0]
        let entrObg = data[i][keyObg]
        engWords.push(keyObg)
        uaWords.push(entrObg)
    }
   })
   result.push(engWords)
   result.push(uaWords)

   return result
}
export default getResourceWord