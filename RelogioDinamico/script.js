function carregar (){
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto= data.getMinutes()
        
    if (hora >= 0 && hora < 12 ){
        img.src = "fotodamanha.png"
        document.body.style.background = '#f9f6ac'
        //MANHÃ
    } else if (hora >= 12 && hora < 18){
         img.src= "fotodatarde.png" 
         document.body.style.background = '#f1ad5b'
         //TARDE
    } else {
         img.src = "fotodanoite.png"
         document.body.style.backgroud = '#100c2e'
         document.footer = "#665c49"
         //NOITE
    }

    if(minuto < 10){
      msg.innerHTML= `Agora são ${hora}:0${minuto}`
    } else {
        msg.innerHTML = `Agora são ${hora}:${minuto}`

    }
}