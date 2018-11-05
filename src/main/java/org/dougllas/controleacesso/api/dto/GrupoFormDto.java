package org.dougllas.controleacesso.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.dougllas.controleacesso.model.Grupo;
import org.dougllas.controleacesso.model.Permissao;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class GrupoFormDto {

    private Grupo entity;
    private List<Permissao> permissoesDisponiveis;

}
