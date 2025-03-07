package com.sorrisodopovo.CalculoDentista.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FolhaDePagamentoDto {
    private double valorDinheiro;
    private double valorCartaoDebito;
    private double valorCartaoCredito;
    private double valorBoleto;
    private double valorIndicacao;
    private boolean comissaoClinica;
}
