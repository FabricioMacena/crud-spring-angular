package com.api.demo.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.api.demo.models.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, UUID> {
	
	@Query(value = "SELECT DISTINCT p.category FROM ProductModel p")
	List<String> findDisctinctCategories();
	
}
