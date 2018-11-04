package org.dougllas.controleacesso.service.impl;


import org.dougllas.controleacesso.repository.FullRepository;
import org.dougllas.controleacesso.service.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */

@Service
public abstract class AbstractServiceImpl<T, ID extends Serializable, REPOSITORY extends FullRepository<T, ID>> implements AbstractService<T, ID> {

    @Autowired
    private REPOSITORY repository;
    private Class<T> entityClass;

    @Override
    @Transactional
    public T save(T t) {
        return repository.save(t);
    }

    @Override
    @Transactional
    public T update(T t) {
        return repository.save(t);
    }


    @Override
    @Transactional
    public void delete(T t) {
        repository.delete(t);
    }

    @Override
    @Transactional
    public void saveAll(Collection<T> ts) {
        repository.saveAll(ts);
    }

    @Override
    @Transactional
    public void updateAll(Collection<T> ts) {
        repository.saveAll(ts);
    }

    @Override
    @Transactional
    public void saveOrUpdateAll(Collection<T> ts) {
        repository.saveAll(ts);
    }

    @Override
    @Transactional
    public void deleteAll(Collection<T> ts) {
        repository.deleteAll(ts);
    }

    @Override
    public Optional<T> find(ID id) {
        return repository.findById(id);
    }

    @Override
    public List<T> find(T filtro) {
        return (List<T>) repository.findAll(getDefaultExample(filtro));
    }

    @Override
    public List<T> findAll() {
        return (List<T>) repository.findAll();
    }

    @Override
    public Long count() {
        return repository.count();
    }

    @Override
    public Long count(T filtro) {
        return repository.count(getDefaultExample(filtro));
    }

    @Override
    public boolean exists(ID id) {
        return repository.existsById(id);
    }

    @Override
    public boolean exists(T filtro) {
        return count(filtro) > 0;
    }

    public Example<T> getDefaultExample(T filtro){

        ExampleMatcher defaultMatcher = ExampleMatcher
                .matching()
                .withIgnoreNullValues()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);

        return  Example.of(filtro, defaultMatcher);
    }

    public Class<T> getEntityClass() {
        if(entityClass == null)
            entityClass = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass() ).getActualTypeArguments()[0];
        return entityClass;
    }

    public REPOSITORY getRepository() {
        return repository;
    }

    @Override
    public List<T> load( int offset, int limit, Sort sortOptions, T filtro) {
        Example<T> example = getDefaultExample(filtro);
        PageRequest pageRequest = sortOptions == null ? PageRequest.of(offset, limit) : PageRequest.of(offset, limit, sortOptions);
        return repository.findAll( example, pageRequest ).getContent();
    }
}
