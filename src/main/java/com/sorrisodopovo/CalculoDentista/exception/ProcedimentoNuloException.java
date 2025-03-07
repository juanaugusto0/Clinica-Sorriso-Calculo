package com.sorrisodopovo.CalculoDentista.exception;

public class ProcedimentoNuloException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public ProcedimentoNuloException() {
        super("O valor do procedimento não pode ser nulo ou negativo");
    }
}
