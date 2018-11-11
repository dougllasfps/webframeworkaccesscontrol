package org.dougllas.controleacesso.service;

import org.dougllas.controleacesso.model.Grupo;
import org.dougllas.controleacesso.model.Usuario;
import org.dougllas.controleacesso.repository.UsuarioRepository;
import org.dougllas.controleacesso.service.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UsuarioService extends AbstractServiceImpl<Usuario, Integer, UsuarioRepository> {

    @Override
    public Usuario save(Usuario usuario) {
        Set<Grupo> grupos = usuario.getGrupos();
        usuario.setGrupos(null);
        super.save(usuario);
        usuario.setGrupos(grupos);
        return super.save(usuario);
    }
}