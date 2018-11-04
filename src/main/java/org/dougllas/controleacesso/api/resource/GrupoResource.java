package org.dougllas.controleacesso.api.resource;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.dougllas.controleacesso.model.Grupo;
import org.dougllas.controleacesso.model.Permissao;
import org.dougllas.controleacesso.service.GrupoService;
import org.dougllas.controleacesso.service.PermissaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api/grupos")
public class GrupoResource {

    private final GrupoService service;
    private final PermissaoService permissaoService;

    public GrupoResource(GrupoService service, PermissaoService permissaoService) {
        this.service = service;
        this.permissaoService = permissaoService;
    }

    @GetMapping
    public List<Grupo> findAll(){
        return service.findAll();
    }

    @GetMapping("/novo")
    public GrupoDto novo(){
        List<Permissao> permissoes = permissaoService.findAll();
        return new GrupoDto(new Grupo(), permissoes);
    }

    @GetMapping("{id}")
    public ResponseEntity findOne(@PathVariable("id") Integer id){
        List<Permissao> permissoes = permissaoService.findAll();
        return service.find(id).map( g -> ResponseEntity.ok(new GrupoDto(g, permissoes)) ).orElse(new ResponseEntity(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity save(@Valid @RequestBody Grupo grupo){
        service.save(grupo);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity update( @PathVariable("id") Integer id, @Valid @RequestBody Grupo grupo){
        grupo.setId(id);
        service.save(grupo);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable("id") Integer id){
        return service.find(id).map(p -> {
            service.delete(p);
            return new ResponseEntity(null, HttpStatus.NO_CONTENT);
        }).orElse( new ResponseEntity(null, HttpStatus.NOT_FOUND) );
    }


    @Getter
    @Setter
    @AllArgsConstructor
    private class GrupoDto {

        private Grupo entity;
        private List<Permissao> permissoesDisponiveis;

    }
}