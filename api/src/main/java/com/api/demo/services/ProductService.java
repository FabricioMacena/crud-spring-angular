package com.api.demo.services;

import java.util.List;
import java.util.Map;
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
	
	public Optional<ProductModel> partialUpdateProduct(UUID id, Map<String, Object> updates){
		Optional<ProductModel> productOptional = repository.findById(id);
		if (productOptional.isEmpty()) {
			return productOptional;
		}
		
		ProductModel product = productOptional.get();
		updates.forEach((key, value) -> {
			switch (key) {
			case "name":
				product.setName((String) value);
				break;
			case "price":
				product.setPrice((Double) value);
				break;
			case "amount":
				product.setAmount((Integer) value);
				break;
			case "category":
				product.setCategory((String) value);
				break;
			case "supplier":
				product.setSupplier((String) value);
				break;
			}
		});
		
		repository.save(product);
		return repository.findById(id);
	}
}
