package com.api.demo.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.demo.models.ProductModel;
import com.api.demo.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	public List<ProductModel> getAllProducts(){
		return repository.findAll();
	}
	
	public Optional<ProductModel> getOneProduct(UUID id){
		return repository.findById(id);
	}
	
	public ProductModel createNewProduct(ProductModel newProduct) {
		return repository.save(newProduct);
	}
	
	public Optional<ProductModel> deleteProduct(UUID id){
		Optional<ProductModel> productOptional = repository.findById(id);
		
		productOptional.ifPresent(product -> repository.delete(product));
		
		return productOptional;
	}
}
