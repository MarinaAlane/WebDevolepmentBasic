function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
        
 if (fano.value.length === 0 || fano.value > ano)//verifica se a caixa está vazia e se é maior que ano
    {
     window.alert('Verifique os dados e tente novamente')
 }
    else {
       var fsex= document.getElementsByName('radsex')
       var idade= ano- Number(fano.value)
       var genero = ""  
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       res.innerHTML= `Idade calculada: ${idade}`  }
       if ( fsex[0].checked){
           var genero = `Homem`
            if(idade >=0 && idade <14){
                img.setAttribute('src', 'foto menino.png')
                //Criança
            } else if (idade < 20) {
                img.setAttribute('src','foto adolescente menino.png')
                //Jovem
            } else if (idade < 60){
                img.setAttribute('src', 'foto homem adulto1.png')
                //Adulto
            } else {
                img.setAttribute('src', 'foto idoso1.png')          
               //Idoso
            }
            
       }  else if ( fsex[1].checked) {
           genero = 'Mulher'
           if(idade >=0 && idade <14){
               img.setAttribute('src', 'foto menina.png')
                //Criança
            } else if (idade < 20) {
               img.setAttribute('src', 'foto adolescente menina.png')
                //Jovem
            } else if (idade < 60){
                img.setAttribute('src', 'foto mulher adulta.png')
                //Adulto
            } else {
                img.setAttribute('src', 'foto idosa .png')
                //Idoso
            }
       }
       res.style.textAlign = 'center' // centraliza o texto
       res.innerHTML= `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img) // manda aparecer a imagem
        }
    
    


