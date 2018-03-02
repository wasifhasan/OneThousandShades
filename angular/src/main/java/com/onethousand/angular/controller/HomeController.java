package com.onethousand.angular.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.onethousand.angular.model.Product;
import com.onethousand.angular.repositories.ProductRepository;

@RestController
public class HomeController {
	@Autowired 
	ProductRepository prodRepository;
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	@Value("${distinctCategories}")
	private String distinctCategories;
	
	@RequestMapping(method=RequestMethod.GET, value="/productCategory")
	public List<String> getProductCategory(){
		List<String> categories =  Arrays.asList(distinctCategories.split(","));
		return categories;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/productCategoryMap")
	public Map<String, List<Product>> getProductsMap(){
		Map<String, List<Product>> productCategoriesMap = new HashMap<String, List<Product>>();
		
		List<String> distinctCategories = getProductCategory();
		Iterable<Product> products = prodRepository.findAll();
		for(String category : distinctCategories) {
			List<Product> productList = new ArrayList<Product>();
			for(Product product: products) {
				if(product.getCategory().equals(category)) {
					productList.add(product);
				}
			}
			productCategoriesMap.put(category, productList);
		}
		return productCategoriesMap;
	}
	
	
}
