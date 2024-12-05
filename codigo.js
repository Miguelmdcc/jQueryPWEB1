// function enviar(){
//     var texto = document.getElementById("escrita").value;
//     if(texto){
//         document.getElementById("resultado").style.display = "inline";
//         document.getElementById("resultado").value = texto;
//         document.getElementById("escrita").value = "";
//     }else{
//         window.alert("Inserir dados");
//     }
// }

// function resetar(){
//     document.getElementById("resultado").style.display = "none";
//     document.getElementById("resultado").value = "";
//     document.getElementById("escrita").value = "";
// }



$(document).ready(function(){
    $("#resultado").hide();
    // Envia valor para o input que aparece em um fade-in
    $("#envia").click(function(){
      // $("#resultado").fadeIn();
      var texto = $("#escrita").val();
      if(texto){
        $("#resultado").val(texto);
        $("#resultado").slideDown();
        $("#escrita").val("");
      }else{
        window.alert("Insira os dados!");
      }
    });

    $("#reset").click(function(){
      // $("#resultado").val("");
      $("#resultado").fadeOut();
    });
  
  });