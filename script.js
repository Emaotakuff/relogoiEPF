console.log("O script está sendo executado");

document.addEventListener('DOMContentLoaded', () => {
    const relogio = document.getElementById("relogio");
    const somAlarme = new Audio('aud/videoplayback.m4a');
    const horariosAlarme = [
        "08:30", "08:35", "09:30", "09:45", "09:50", "11:45", "11:50",
        "12:00", "13:00", "14:00", "14:15", "14:20", "15:30", "15:35",
        "15:45", "15:50", "17:30"
    ];

    function atualizarRelogio() {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');
        
        const tempoAtual = `${horas}:${minutos}:${segundos}`;
        const horaAtual = `${horas}:${minutos}`;
        
        if (relogio) {
            relogio.textContent = tempoAtual;
            console.log("Relógio atualizado:", tempoAtual);

            // Verifica se é hora do alarme
            if (horariosAlarme.includes(horaAtual)) {
                somAlarme.play();
                console.log("Alarme tocando!");
            }
        } else {
            console.error("Elemento 'relogio' não encontrado");
        }
    }

    if (relogio) {
        setInterval(atualizarRelogio, 1000);
        atualizarRelogio(); // Atualiza imediatamente
        console.log("Configuração do relógio concluída");
        console.log("Alarme definido para:", horariosAlarme);
    } else {
        console.error("Elemento 'relogio' não encontrado. O relógio não pode ser iniciado.");
    }
});
