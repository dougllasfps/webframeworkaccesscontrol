package org.dougllas.controleacesso.service;

import org.dougllas.controleacesso.model.Grupo;
import org.dougllas.controleacesso.model.Permissao;
import org.dougllas.controleacesso.repository.GrupoRepository;
import org.dougllas.controleacesso.service.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class GrupoService extends AbstractServiceImpl<Grupo, Integer, GrupoRepository> {

    @Override
    public Grupo save(Grupo grupo) {
        Set<Permissao> permissoes = grupo.getPermissoes();
        grupo.setPermissoes(null);
        getRepository().save(grupo);
        grupo.setPermissoes(permissoes) ;
        return super.save(grupo);
    }
}