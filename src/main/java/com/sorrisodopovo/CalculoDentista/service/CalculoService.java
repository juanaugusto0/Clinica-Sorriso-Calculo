package com.sorrisodopovo.CalculoDentista.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sorrisodopovo.CalculoDentista.dto.FolhaDePagamentoDto;

@Service
public class CalculoService {

    public ResponseEntity<Map<String, Double>> calcularValorDentista(FolhaDePagamentoDto dto) {
        double valorDentista = dto.getValorProcedimento();
        valorDentista -= 0.15 * dto.getValorCartaoDebito();
        valorDentista -= 0.20 * dto.getValorCartaoCredito();
        valorDentista -= 0.25 * dto.getValorBoleto();
        valorDentista -= dto.getValorIndicacao();
        if (dto.isComissaoClinica()) {
            valorDentista = 0.30 * valorDentista;
        } else {
            valorDentista = 0.50 * valorDentista;
        }

        Map<String, Double> resposta = new HashMap<>();
        resposta.put("valorPago", valorDentista);

        return ResponseEntity.ok(resposta);

    }

}
