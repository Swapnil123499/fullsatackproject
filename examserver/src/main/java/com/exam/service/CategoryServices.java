package com.exam.service;

import java.util.Set;

import com.exam.model.exam.Category;

public interface CategoryServices {
	
	public Category addCategory(Category category);
	public Category updateCategory(Category category);
	public Set<Category> getCategories();
	public Category getCategory(Long categoryid);
	public void deleteCategory(Long categoryid);

}
