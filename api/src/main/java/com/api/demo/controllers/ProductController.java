package com.api.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.demo.models.ProductModel;
import com.api.demo.services.ProductService;

import jakarta.validation.Valid;

@RestController
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@GetMapping("/api/products/")
	public ResponseEntity<?> getAllProducts(){
		List<ProductModel> products = service.getAllProducts();
		
		if (products.size() == 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não há produtos cadastrados!");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(products);
	}
	
	@GetMapping("/api/products/{id}")
	public ResponseEntity<?> getOneProduct(@PathVariable(value = "id") UUID id){
		Optional<ProductModel> productOptional = service.getOneProduct(id);
		
		if (productOptional.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("O produto não foi encontrado");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(productOptional.get());
	}
	
	@PostMapping("/api/products/")
	public ResponseEntity<ProductModel> createNewProduct(@Valid @RequestBody ProductModel newProduct){
		return ResponseEntity.status(HttpStatus.CREATED).body(service.createNewProduct(newProduct));
	}
	
	@DeleteMapping("/api/products/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable(value = "id") UUID id){
		Optional<ProductModel> productOptional = service.deleteProduct(id);
		
		if (productOptional.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("O produto não foi encontrado");
		}
		
		ProductModel productDeleted = productOptional.get();
		return ResponseEntity.status(HttpStatus.OK).body(productDeleted.getName() + " foi removido com sucesso!!");
	}
	
	@PatchMapping("/api/products/{id}")
	public ResponseEntity<?> partialUpdateProduct(@PathVariable(value = "id") UUID id,
													@RequestBody Map<String, Object> updates){
		Optional<ProductModel> productOptional = service.partialUpdateProduct(id, updates);
		
		if (productOptional.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("O produto não foi encontrado!");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(productOptional.get()); 
	}
}
