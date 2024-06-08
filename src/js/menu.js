function enviarPedido() {
    var sabor = document.querySelector('input[name="massa"]:checked').value;
    var cobertura = document.querySelector('input[name="cobertura"]:checked').value;
    var recheio = document.querySelector('input[name="recheio"]:checked').value;
    var quantidade = document.querySelector('input[name="quantidade"]:checked').value;
    var observacoes = document.getElementById("observacoes").value;

    
    var mensagem = "Pedido de Donuts:\n";
    mensagem += "Massa: " + sabor + "\n";
    mensagem += "Cobertura: " + cobertura + "\n";
    mensagem += "Recheio: " + recheio + "\n";
    mensagem += "Quantidade: " + quantidade + "\n";
    if (observacoes.trim() !== "") {
        mensagem += "Observações: " + observacoes + "\n";
    }

    // Exibe a mensagem no console para verificar
    console.log("Mensagem: " + mensagem);
    
    // Codifique a mensagem para URL
    var mensagemCodificada = encodeURIComponent(mensagem);

    // Link para enviar a mensagem para o WhatsApp
    var link = "https://api.whatsapp.com/send?phone=556192258586&text=" + mensagemCodificada + "&app_absent=0";

     // Exibe o link no console para verificar
     console.log("Link: " + link);

    // Abrir a página do WhatsApp com a mensagem preenchida
    window.open(link);
}