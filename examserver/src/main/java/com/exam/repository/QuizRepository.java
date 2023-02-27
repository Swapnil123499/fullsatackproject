package com.exam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
	
	public List<Quiz> findBycategory(Category category);
	
	// the active are in camel case and active came from pojo class of quiz;
	//this known as custom finder methods....
	public List<Quiz> findByActive(Boolean b);
	public List<Quiz> findByCategoryAndActive(Category c, Boolean b);

}
