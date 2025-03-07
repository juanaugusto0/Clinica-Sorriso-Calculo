package com.sorrisodopovo.CalculoDentista.exception;

public class TotalIncorretoException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public TotalIncorretoException() {
        super("O valor total dos pagamentos não corresponde ao valor do procedimento");
    }
}
