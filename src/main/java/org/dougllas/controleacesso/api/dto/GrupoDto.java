package org.dougllas.controleacesso.api.dto;

import lombok.*;
import org.dougllas.controleacesso.model.Grupo;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

    public static Grupo to ( GrupoDto grupo){
        return Grupo.builder().descricao(grupo.getDescricao()).id(grupo.getId()).build();
    }

    public static List<Grupo> to(List<GrupoDto> grupos){
        return grupos.stream().map( g -> to(g) ).collect(Collectors.toList());
    }
}