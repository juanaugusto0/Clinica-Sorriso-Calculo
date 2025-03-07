function calcular() {
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

    // Fazer a requisição POST
    fetch('/get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('resultado').textContent = 
            `R$ ${data.valorPago.toFixed(2).replace('.', ',')}`;
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('resultado').textContent = 'Erro ao calcular';
    });
}