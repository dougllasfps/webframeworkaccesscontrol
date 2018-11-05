package org.dougllas.controleacesso.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.dougllas.controleacesso.model.Grupo;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class GrupoDto {

    private Integer id;
    private String descricao;

    public static GrupoDto from (Grupo grupo){
        return GrupoDto.builder().descricao(grupo.getDescricao()).id(grupo.getId()).build();
    }

    public static List<GrupoDto> from(List<Grupo> grupos){
        return grupos.stream().map( g -> from(g) ).collect(Collectors.toList());
    }
}