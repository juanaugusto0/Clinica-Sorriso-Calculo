package com.sorrisodopovo.CalculoDentista.controller;

import com.sorrisodopovo.CalculoDentista.dto.FolhaDePagamentoDto;
import com.sorrisodopovo.CalculoDentista.service.CalculoService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class CalculoController {

    @Autowired
    private CalculoService calculoService;

    @PostMapping("/get")
    public ResponseEntity<Map<String, Double>> valorParaDentista(@RequestBody FolhaDePagamentoDto dto) {
        return calculoService.calcularValorDentista(dto);
    }
}
