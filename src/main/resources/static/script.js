document.addEventListener('DOMContentLoaded', function() {
    // Formatação automática para 2 casas decimais
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('blur', function(e) {
            if (e.target.value) {
                const value = parseFloat(e.target.value);
                e.target.value = !isNaN(value) ? value.toFixed(2) : '';
            }
        });
    });
});

function calcular() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = 'Carregando...';
    resultadoElement.classList.add('carregando');


    // Coletar valores dos inputs
    const valorDinheiro = parseFloat(document.getElementById('valorDinheiro').value) || 0;
    const valorCartaoDebito = parseFloat(document.getElementById('valorCartaoDebito').value) || 0;
    const valorCartaoCredito = parseFloat(document.getElementById('valorCartaoCredito').value) || 0;
    const valorBoleto = parseFloat(document.getElementById('valorBoleto').value) || 0;
    const valorIndicacao = parseFloat(document.getElementById('valorIndicacao').value) || 0;
    const comissaoClinica = document.getElementById('comissaoClinica').value === 'SIM';

    // Montar o DTO
    const requestBody = {
        valorDinheiro: valorDinheiro,
        valorCartaoDebito: valorCartaoDebito,
        valorCartaoCredito: valorCartaoCredito,
        valorBoleto: valorBoleto,
        valorIndicacao: valorIndicacao,
        comissaoClinica: comissaoClinica
    };

    fetch('/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (!response.ok) throw new Error('Erro na requisição');
        return response.json();
    })
    .then(data => {
        resultadoElement.textContent = `R$ ${data.valorPago.toFixed(2).replace('.', ',')}`;
    })
    .catch(error => {
        console.error('Erro:', error);
        resultadoElement.textContent = 'Erro ao calcular';
    })
    .finally(() => {
        resultadoElement.classList.remove('carregando');
    });
}