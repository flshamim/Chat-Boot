const massageButton =() =>{
    const sentMassage = document.getElementById('sent')
       fetch(`https://api.simsimi.net/v2/?text=${sentMassage}&lc=en&cf=true`)
       .then(res =>res.json())
       .then(data => console.log(data))
}

massageButton()