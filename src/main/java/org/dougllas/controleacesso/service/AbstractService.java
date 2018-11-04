package org.dougllas.controleacesso.service;

import org.springframework.data.domain.Sort;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */
public interface AbstractService<T, ID extends Serializable> {

    T save(T entidade);
    T update(T entidade);

    void delete(T entidade);

    void saveAll(Collection<T> entidades);
    void updateAll(Collection<T> entidades);
    void saveOrUpdateAll(Collection<T> entidades);
    void deleteAll(Collection<T> entidades);

    Optional<T> find(ID id);
    List<T> find(T filtro);
    List<T> findAll();

    Long count();
    Long count(T filtro);

    boolean exists(ID id);
    boolean exists(T filtro);

    List<T> load(int offset, int limit, Sort sortOptions, T filtro);

}