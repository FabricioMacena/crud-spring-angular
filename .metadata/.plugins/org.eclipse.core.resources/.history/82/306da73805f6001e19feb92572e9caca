package com.api.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@PostMapping("/api/products/")
	public ResponseEntity<ProductModel> createNewProduct(@Valid @RequestBody ProductModel newProduct){
		return ResponseEntity.status(HttpStatus.CREATED).body(service.createNewProduct(newProduct));
	}
}
