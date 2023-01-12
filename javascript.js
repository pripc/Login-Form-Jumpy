function verifyInformations(){
    event.preventDefault();
    var mustFillerSpace = document.querySelectorAll(".MustFillerSpace");
    mustFillerSpace = Array.from(mustFillerSpace); //Transformando o NodeList num Array//

    var ErrorMensage = document.querySelectorAll('.ErrorMensage')
    ErrorMensage = Array.from(ErrorMensage)       //Transformando o NodeList num Array//

    for(let i=0 ; i < mustFillerSpace.length ; i++) {
        if(mustFillerSpace[i].value == 0 || mustFillerSpace[i].value == null){
            ErrorMensage[i].innerHTML = "Campo Obrigatório";
            document.getElementById('finalMensage').style.color ='red'
            document.getElementById('finalMensage').innerHTML = 'Campos obrigatórios não registrados'
        }
        else{
            document.getElementById('finalMensage').style.color ='green'
            ErrorMensage[i].innerHTML = ""
            document.getElementById('finalMensage').innerHTML ="Sucesso!"
        }      
    }    
}
document.getElementById('cpf').addEventListener('focusout', () => { //Verifica se o número do CPF digitado tem 11 caracteres//
    var cpfNumber=document.getElementById('cpf').value
    if(cpfNumber.length != 11){
        window.alert("CPF inválido,favor digitar novamente")}
})

