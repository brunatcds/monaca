$(document).ready(function() {
    $(document).on("click", "#alerta", function(){
        alert("minha Mensagem");
    });

    $(document).on("click", "#confirm", function(){
        function confirma(buttonIndex) {
            if(buttonIndex == 1) {
                alert("Escolheu a opção A");
            } else {
                alert("Escolheu a opção B");
            }
        }
        var resposta = confirm("Escolha A ou B");
        if (resposta) {
            confirma(1);
        } else {
            confirma(2);
        }
    });

    $(document).on("click", "#beep", function(){
        // Não há suporte direto para beep em JavaScript padrão
        console.log("Beep não é suportado em JavaScript padrão.");
    });

    if ("vibrate" in navigator) {
        console.log("Vibração é suportada");
    } else {
        console.log("Vibração não é suportada");
    }
});
