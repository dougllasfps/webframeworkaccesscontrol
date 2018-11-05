package org.dougllas.controleacesso.api.resource;

import org.dougllas.controleacesso.api.dto.GrupoDto;
import org.dougllas.controleacesso.api.dto.UsuarioDto;
import org.dougllas.controleacesso.api.dto.UsuarioFormDto;
import org.dougllas.controleacesso.model.Grupo;
import org.dougllas.controleacesso.model.Usuario;
import org.dougllas.controleacesso.service.GrupoService;
import org.dougllas.controleacesso.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioResource {

    private final UsuarioService service;
    private final GrupoService grupoService;

    public UsuarioResource(UsuarioService service, GrupoService grupoService) {
        this.service = service;
        this.grupoService = grupoService;
    }

    @GetMapping
    public List<UsuarioDto> findAll(){
        return UsuarioDto.from(service.findAll());
    }

    @GetMapping("/novo")
    public UsuarioFormDto novo(){
        List<Grupo> grupos = grupoService.findAll();
        return new UsuarioFormDto( new UsuarioDto(), GrupoDto.from(grupos));
    }

    @GetMapping("{id}")
    public ResponseEntity findOne(@PathVariable("id") Integer id){
        List<Grupo> grupos = grupoService.findAll();
        return service.find(id)
                .map( u -> ResponseEntity.ok(new UsuarioFormDto( UsuarioDto.from(u), GrupoDto.from(grupos))) )
                .orElse(new ResponseEntity(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity save(@Valid @RequestBody UsuarioDto usuarioDto){
        service.save(usuarioDto.to());
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity update( @PathVariable("id") Integer id, @Valid @RequestBody UsuarioDto usuarioDto){
        Usuario entity = usuarioDto.to();
        entity.setId(id);
        service.save(entity);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable("id") Integer id){
        return service.find(id).map(p -> {
            service.delete(p);
            return new ResponseEntity(null, HttpStatus.NO_CONTENT);
        }).orElse( new ResponseEntity(null, HttpStatus.NOT_FOUND) );
    }
}
