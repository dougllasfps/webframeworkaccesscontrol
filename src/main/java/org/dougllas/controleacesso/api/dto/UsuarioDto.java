package org.dougllas.controleacesso.api.dto;

import lombok.*;
import org.dougllas.controleacesso.model.Usuario;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UsuarioDto {

    private Integer id;
    private String nome;
    private String email;
    private String senha;
    private List<GrupoDto> grupos;

    public static UsuarioDto from(Usuario usuario){
        return UsuarioDto.builder().email(usuario.getEmail())
                .id(usuario.getId())
                .nome(usuario.getNome())
                .email(usuario.getEmail())
                .grupos(GrupoDto.from(new ArrayList<>(usuario.getGrupos())))
                .build();
    }

    public static List<UsuarioDto> from (List<Usuario> usuarios){
        return usuarios.stream().map( u -> from(u) ).collect(Collectors.toList());
    }

    public Usuario to(){
        return Usuario.builder()
                .email(this.email)
                .grupos(new HashSet(this.grupos))
                .nome(this.nome)
                .senha(this.senha)
                .id(this.id)
                .build();
    }
}