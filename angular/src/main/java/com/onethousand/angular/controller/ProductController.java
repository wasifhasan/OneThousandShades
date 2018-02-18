package com.onethousand.angular.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.onethousand.angular.model.Product;
import com.onethousand.angular.repositories.ProductRepository;

@RestController
public class ProductController {
	@Autowired 
	ProductRepository prodRepository;
	
	@RequestMapping(method=RequestMethod.GET, value="/products")
	public Iterable<Product> getProducts(){
		return prodRepository.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/addProduct")
	public Product addProduct(@RequestBody Product product){
		return prodRepository.save(product);
	}
}
