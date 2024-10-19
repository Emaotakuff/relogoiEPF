console.log("O script está sendo executado");

const relogio = document.getElementById("relogio");
const alarme = new Audio('aud/videoplayback.m4a');

const horariosAlarme = [
    "08:25", "08:30", "09:30", "09:45", "10:45", "11:45", "12:00",
    "13:00", "14:15", "15:15", "15:30", "16:30", "17:30"
];

function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    const tempoAtual = `${horas}:${minutos}:${segundos}`;
    relogio.textContent = tempoAtual;
    
    console.log("Relógio atualizado:", tempoAtual);

    // Verifica se é hora de tocar o alarme
    if (segundos === '00' && horariosAlarme.includes(`${horas}:${minutos}`)) {
        tocarAlarme();
    }
}

function tocarAlarme() {
    alarme.play();
    console.log("Alarme tocado às", relogio.textContent);
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Atualiza imediatamente na carga da página
atualizarRelogio();

console.log("Configuração do relógio concluída");
