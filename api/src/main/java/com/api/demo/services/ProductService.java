package com.api.demo.services;

import java.util.List;

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
	
	public ProductModel createNewProduct(ProductModel newProduct) {
		return repository.save(newProduct);
	}
}
