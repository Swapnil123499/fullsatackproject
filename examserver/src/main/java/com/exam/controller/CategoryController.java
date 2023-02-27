package com.exam.controller;


import org.springframework.beans.factory.annotation.Autowired;
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

import com.exam.model.exam.Category;
import com.exam.service.CategoryServices;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
	
	@Autowired
	private CategoryServices categoryServices;
	
	//add category
	@PostMapping("/")//category or responseEntity are allowed
	public ResponseEntity<?>addCategory(@RequestBody Category category ){
		
		Category category1 = this.categoryServices.addCategory(category);
		
		return ResponseEntity.ok(category1);
		
	}
	
	//get category 
	
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId")Long categoryId) {
		
		return this.categoryServices.getCategory(categoryId);
	}
	//get all category
	@GetMapping("/")
	public ResponseEntity<?> getCategories(){
		
		return ResponseEntity.ok(this.categoryServices.getCategories());
	}
	
	@PutMapping("/")
	public Category updateCategory(@RequestBody Category category) {
		return this.categoryServices.updateCategory(category);
	}

	//delete Category 
	
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") Long categoryId) {
		this.categoryServices.deleteCategory(categoryId);
	}
	
}
