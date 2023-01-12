 function contar() {
      let ini = document.getElementById('txti')
      let fim = document.getElementById ('txtf')
      let passo = document.getElementById ('txtp')
      
     
      if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       window.alert('[ERRO] faltam dados!')
       res.innerHTML = `Impossivel contar`

      } else {
         res.innerHTML = `Contando:<br>`
         let i = Number(ini.value)
         let f = Number(fim.value)
         let p = Number(passo.value)
         if(p <=0 ) {
            window.alert('Passo invalido')
            p = 1
         }
         if(i < f){
            //Contagem cresecente
            for(let c =i; c <=f; c +=p){
               res.innerHTML += `${c}`
            }
         } else{
            //Contagem regressiva
            for(let c = i; c>=f; c-=p){
               res.innerHTML += `${c}`
            }
         }

      }
   }
         
          