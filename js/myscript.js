mailArray = ['esempio@gmail.com','franco@yahoo.it','gianni@libero.it']; //creo l'array di mail che possano accedere

document.getElementById("controlla").addEventListener("click",function(){ // al click eseguo i controlli e le operazione necessarie

    //controllo se nell'array è presente la mail inserita dall'utente
    for(let i = 0; i < mailArray.lenght; i++){
        if(document.getElementById("userMail") == mailArray[i]){

            //cambio schermata ->> passo alla schermata di gioco
            document.getElementById('scomparsa').style.display = "none";
            document.getElementById('comparsa').style.display = "block";

            
            document.getElementById("tiraDadi").addEventListener("click",function(){ // al click gira i dadi e li mostra

                let userDado = Math.floor(Math.random()*6+1);
                let computerDado = Math.floor(Math.random()*6+1);

                document.getElementById
            });
            

        };
    };

});