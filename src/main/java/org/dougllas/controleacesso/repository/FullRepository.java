package org.dougllas.controleacesso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */

@NoRepositoryBean
public interface FullRepository<T, ID>
        extends JpaRepository<T, ID>,
        CrudRepository<T, ID>,
        PagingAndSortingRepository<T, ID>,
        JpaSpecificationExecutor<T>,
        QueryByExampleExecutor<T> {
}
