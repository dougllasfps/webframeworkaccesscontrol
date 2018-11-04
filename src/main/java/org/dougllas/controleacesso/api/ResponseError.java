package org.dougllas.controleacesso.api;

public class ResponseError {

    private String error;

    public static ResponseError of(String error) {
        ResponseError e = new ResponseError();
        e.error = error;
        return e;
    }

    public String getError() {
        return error;
    }

    public ResponseError setError(String error) {
        this.error = error;
        return this;
    }
}
