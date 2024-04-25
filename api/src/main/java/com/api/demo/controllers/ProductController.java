package com.api.demo.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.demo.models.ProductModel;
import com.api.demo.services.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@GetMapping("/")
	public ResponseEntity<?> getAllProducts(){
		List<ProductModel> products = service.getAllProducts();
		
		if (products.size() == 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não há produtos cadastrados!");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(products);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getOneProduct(@PathVariable(value = "id") UUID id){
		Optional<ProductModel> productOptional = service.getOneProduct(id);
		
		if (productOptional.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("O produto não foi encontrado");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(productOptional.get());
	}
	
	@PostMapping("/")
	public ResponseEntity<ProductModel> createNewProduct(@Valid @RequestBody ProductModel newProduct){
		return ResponseEntity.status(HttpStatus.CREATED).body(service.createNewProduct(newProduct));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable(value = "id") UUID id){
		Optional<ProductModel> productOptional = service.deleteProduct(id);
		
		if (productOptional.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable(value = "id") UUID id,
													@Valid @RequestBody ProductModel newProduct){
		Optional<ProductModel> productOptional = service.updateProduct(id, newProduct);
		
		if (productOptional.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("O produto não foi encontrado!");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(productOptional.get());
	}
	
	@GetMapping("/categories")
	public ResponseEntity<List<String>> getCategories(){
		return ResponseEntity.status(HttpStatus.OK).body(service.categoriesOfProducts());
	}
}
