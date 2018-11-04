package org.dougllas.controleacesso.api.resource;

import org.dougllas.controleacesso.model.Permissao;
import org.dougllas.controleacesso.service.PermissaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/permissoes")
public class PermissaoResource {

    private final PermissaoService service;

    public PermissaoResource(PermissaoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Permissao> findAll(){
        return service.findAll();
    }

    @PostMapping
    public ResponseEntity save(@Valid @RequestBody Permissao permissao ){
        service.save(permissao);
        return new ResponseEntity(null, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity update( @PathVariable("id") Integer id, @Valid @RequestBody Permissao permissao ){
        permissao.setId(id);
        service.save(permissao);
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable("id") Integer id){
        return service.find(id).map(p -> {
            service.delete(p);
            return new ResponseEntity(null, HttpStatus.NO_CONTENT);
        }).orElse( new ResponseEntity(null, HttpStatus.NOT_FOUND) );
    }
}
