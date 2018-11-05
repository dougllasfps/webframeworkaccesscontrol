package org.dougllas.controleacesso.service;

import org.dougllas.controleacesso.model.Usuario;
import org.dougllas.controleacesso.repository.UsuarioRepository;
import org.dougllas.controleacesso.service.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService extends AbstractServiceImpl<Usuario, Integer, UsuarioRepository> {
}