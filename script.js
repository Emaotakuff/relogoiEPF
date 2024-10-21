console.log("O script está sendo executado");

document.addEventListener('DOMContentLoaded', () => {
    const relogio = document.getElementById("relogio");
    
    function atualizarRelogio() {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');
        
        const tempoAtual = `${horas}:${minutos}:${segundos}`;
        
        if (relogio) {
            relogio.textContent = tempoAtual;
            console.log("Relógio atualizado:", tempoAtual);
        } else {
            console.error("Elemento 'relogio' não encontrado");
        }
    }

    if (relogio) {
        setInterval(atualizarRelogio, 1000);
        atualizarRelogio(); // Atualiza imediatamente
        console.log("Configuração do relógio concluída");
    } else {
        console.error("Elemento 'relogio' não encontrado. O relógio não pode ser iniciado.");
    }
});
