package org.dougllas.controleacesso.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class UsuarioFormDto {

    private UsuarioDto entity;
    private List<GrupoDto> gruposDisponiveis;
}