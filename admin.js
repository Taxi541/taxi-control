// ==========================================
// TAXI CONTROL - ADMINISTRADOR
// ==========================================

let linkCorrida = "";

function gerarLink() {

    const nome = document.getElementById("nome").value.trim();
    const origem = document.getElementById("origem").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const horario = document.getElementById("horario").value;

    if (!nome || !origem || !destino || !horario) {
        alert("Preencha todos os campos.");
        return;
    }

    const base = "https://taxi541.github.io/taxi-control/";

    linkCorrida =
        base +
        "?nome=" + encodeURIComponent(nome) +
        "&origem=" + encodeURIComponent(origem) +
        "&destino=" + encodeURIComponent(destino) +
        "&horario=" + encodeURIComponent(horario);

    document.getElementById("linkGerado").value = linkCorrida;

    document.getElementById("mensagem").style.display = "none";
}

function copiarLink() {

    if (linkCorrida === "") {
        alert("Primeiro gere o link.");
        return;
    }

    navigator.clipboard.writeText(linkCorrida);

    document.getElementById("mensagem").style.display = "block";

    setTimeout(function () {

        document.getElementById("mensagem").style.display = "none";

    }, 2500);

}

function abrirWhatsApp() {

    if (linkCorrida === "") {
        alert("Primeiro gere o link.");
        return;
    }

    const mensagem =
`🚖 Nova corrida

👤 Passageiro: ${document.getElementById("nome").value}

📍 Origem: ${document.getElementById("origem").value}

🏁 Destino: ${document.getElementById("destino").value}

🕒 Horário: ${document.getElementById("horario").value}

Clique no link abaixo para iniciar a corrida:

${linkCorrida}`;

    window.open(
        "https://wa.me/?text=" + encodeURIComponent(mensagem),
        "_blank"
    );

}
