package com.exam.repository.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.model.exam.Category;
import com.exam.repository.CategoryRepository;
import com.exam.service.CategoryServices;
@Service
public class CategoryServiceImpl implements CategoryServices {
	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Category addCategory(Category category) {
		
		return this.categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		 
		
		return this.categoryRepository.save(category);
	}

	@Override
	public Set<Category> getCategories() {
		
		return new LinkedHashSet<> (this.categoryRepository.findAll());//all the category stored in LinkedHashSet
	}

	@Override
	public Category getCategory(Long categoryid) {
		
		return this.categoryRepository.findById(categoryid).get();//as findbyid give optional we called the get functional
	}

	@Override
	public void deleteCategory(Long categoryid) {
		Category category = new Category();
		category.setCid(categoryid);
		this.categoryRepository.delete(category);
	}

}
