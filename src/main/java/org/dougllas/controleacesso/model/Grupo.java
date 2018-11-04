package org.dougllas.controleacesso.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "grupo", schema = "controleacesso")
public class Grupo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String descricao;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "grupo_permissao",
            schema = "controleacesso",
            joinColumns = @JoinColumn(name = "id_grupo", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "id_permissao", referencedColumnName = "id")
    )
    private Set<Permissao> permissoes;

}