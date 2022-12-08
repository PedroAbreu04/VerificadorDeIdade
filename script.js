function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert("Erro, tente novamente")

    }else{
       var fsex = document.getElementsByName('sex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if(fsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade < 10){
            img.setAttribute('src', './img/bebem.png')
           }else if(idade >=10 && idade < 21){
            img.setAttribute('src', './img/jovemm.png')
           }else if (idade < 50 ){
            img.setAttribute('src', './img/adultom.png')
           }else {
            img.setAttribute('src', './img/vovom.png')
           }

       } else if (fsex[1].checked){
           genero = 'Mulher'
         if(idade >= 0 && idade < 10){
    
            img.setAttribute('src', './img/bebef.png')
        }else if(idade >=10 && idade < 21){
            img.setAttribute('src', './img/jovemf.png')
        }else if (idade < 50 ){
            img.setAttribute('src', './img/adultof.png')
        }else {
            img.setAttribute('src', './img/vovof.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = 'Detectamos ' + genero + " com " + idade + ' anos'
       res.appendChild(img) 
    }
}