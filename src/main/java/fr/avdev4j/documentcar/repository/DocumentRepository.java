package fr.avdev4j.documentcar.repository;

import fr.avdev4j.documentcar.domain.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the Document entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

    @Query("select d from Document d left join fetch d.content c where d.id = ?1")
    Optional<Document> findByIdWithContentFetched(Long id);
}
