// ==========================================
// TAXI CONTROL - MOTORISTA
// ==========================================

// Lê os parâmetros enviados pelo administrador
const parametros = new URLSearchParams(window.location.search);

document.getElementById("nome").textContent =
    parametros.get("nome") || "Não informado";

document.getElementById("origem").textContent =
    parametros.get("origem") || "Não informado";

document.getElementById("destino").textContent =
    parametros.get("destino") || "Não informado";

document.getElementById("horario").textContent =
    parametros.get("horario") || "Não informado";

// Variáveis internas (não aparecem para o motorista)
let horarioInicio = null;
let horarioFim = null;
let latitude = null;
let longitude = null;

function iniciarCorrida() {

    horarioInicio = new Date();

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(posicao){

            latitude = posicao.coords.latitude;
            longitude = posicao.coords.longitude;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

        });

    }

    document.getElementById("status").className = "status andamento";
    document.getElementById("status").innerHTML =
        "🔵 Corrida em andamento";

    const botao = document.getElementById("botaoCorrida");

    botao.innerHTML = "🏁 FINALIZAR CORRIDA";
    botao.classList.add("finalizar");
    botao.onclick = finalizarCorrida;

}

function finalizarCorrida(){

    horarioFim = new Date();

    document.getElementById("status").className = "status finalizada";
    document.getElementById("status").innerHTML =
        "✅ Corrida finalizada";

    document.getElementById("mensagem").style.display = "block";
    document.getElementById("mensagem").innerHTML =
        "<strong>Obrigado!</strong><br>Corrida encerrada com sucesso.";

    const botao = document.getElementById("botaoCorrida");

    botao.disabled = true;
    botao.innerHTML = "✔️ FINALIZADA";

    console.log("=== DADOS INTERNOS ===");
    console.log("Horário início:", horarioInicio);
    console.log("Horário fim:", horarioFim);
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

}
