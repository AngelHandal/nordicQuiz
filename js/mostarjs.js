
fetch("./JSON/questions.json")
.then(respuesta => respuesta.json())
.then(datos => {
    // valiables
    let output = document.getElementById("output");
    let boton=document.getElementById("enviar");
    let respuesta=document.getElementById("respuesta");
    let contador=3;
    let random=Math.floor(Math.random()*10)
    // eventos
    const event_boton=()=>{
        if(respuesta.value!=datos.easyNorseMythologyQuestions[random].answer){
            alert(datos.easyNorseMythologyQuestions[random].answer);
        }
        else{
            alert("respuesta es correcta");
        }
        random=Math.floor(Math.random()*10)
        let pregunta = datos.easyNorseMythologyQuestions[random].question;
        output.textContent = pregunta;
    };
    //inicio carga
    let pregunta = datos.easyNorseMythologyQuestions[random].question;
    output.textContent = pregunta;
    boton.addEventListener("click",event_boton )
    //comienzo de logica comparacion
  
    //fin de la logica
    //modificacion de evento
    

})






