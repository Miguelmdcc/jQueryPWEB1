function enviar(){
    var texto = document.getElementById("escrita").value;
    if(texto){
        document.getElementById("resultado").value = texto;
        document.getElementById("escrita").value = "";
    }else{
        window.alert("Inserir dados");
    }
}

function resetar(){
    document.getElementById("resultado").value = "";
    document.getElementById("escrita").value = "";
}