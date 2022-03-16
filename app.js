const chat = () =>{
    fetch(`https://api.simsimi.net/v2/?text=you%20have%20a%20girl%20friend&lc=en&cf=true`)
    .then(res =>res.json())
    .then(data => console.log(data))
}
chat()