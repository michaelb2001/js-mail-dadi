let mailArray= ['esempio@gmail.com','franco@yahoo.it','gianni@libero.it']; //creo l'array di mail che possano accedere          
document.getElementById('comparsa').style.display = "none"; 
let spia = false
let sentinella = false
document.getElementById("controlla").addEventListener('click',function(){ // al click eseguo i controlli e le operazione necessarie
            
    //controllo se nell'array è presente la mail inserita dall'utente
    for(let i = 0; i < mailArray.length; i++){ 
       
        if(document.getElementById("userMail").value == mailArray[i] && !sentinella){  
            spia = true; 
            sentinella = true;
        };

        
    };

    if(spia){
        document.getElementById('comparsa').style.display = "block";
        document.getElementById('scomparsa').style.display = "none";
        window.alert("email valida ora puoi giocare!");
        
    }else{
        window.alert("email non valida riprova");
    }
});




document.getElementById("tiraDadi").addEventListener('click',function(){ // al click gira i dadi e li mostra
    let userDado = Math.floor(Math.random()*6)+1;
    console.log(userDado);
    let computerDado = Math.floor(Math.random()*6)+1;
    console.log(computerDado);

    document.getElementById("user").innerHTML = userDado;
    document.getElementById("computer").innerHTML = computerDado;
                    
    if(userDado == computerDado){
        document.getElementById("vincitore").innerHTML = "paregghio";
    } else if( userDado > computerDado){
        document.getElementById("vincitore").innerHTML = "hai vinto";
    } else{
        document.getElementById("vincitore").innerHTML = "hai perso";
    }
});


