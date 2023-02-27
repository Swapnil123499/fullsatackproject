package com.exam.controller;

import java.util.List;

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
import com.exam.model.exam.Quiz;
import com.exam.service.QuizService;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

	@Autowired
	private QuizService quizService;
	
	//add quiz service
	@PostMapping("/")
	public ResponseEntity<Quiz> add(@RequestBody Quiz quiz)
	{
		return ResponseEntity.ok(this.quizService.addQuiz(quiz));
	}
	
	
	//update quiz
	
	@PutMapping("/")
	public ResponseEntity<Quiz> update(@RequestBody Quiz quiz){
		
		return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
	}
	
	//get  quizs
	
	@GetMapping("/")
	public ResponseEntity<?> quizzes()  //write ? or set(quiz)
	{
		
		return ResponseEntity.ok(this.quizService.getQuizzes());
	}
	
	@GetMapping("/{qid}")
	public Quiz quiz (@PathVariable("qid") Long qid)
	{
		return this.quizService.getQuiz(qid);
	}
	
	//delete the quiz 
	
	@DeleteMapping("/{qid}")
	public void delete(@PathVariable("qid") Long qid)
	{
		
		this.quizService.deletQuiz(qid);
	}
	
	
	@GetMapping("/category/{cid}")
	public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid)
	{     Category  category= new Category();
	category.setCid(cid);
		return this.quizService.getQuizzesOfCategory(category);
	}
	
	//get active quizzess
	
	@GetMapping("/active")
	public List<Quiz> getActiveQuzzes(){
		
		return this.quizService.getActiveQuizzes();
	}
	
	//get active category
	@GetMapping("/category/active/{cid}")
	public List<Quiz> getActiveQuzzes(@PathVariable("cid")Long cid){
		Category category=new Category();
		category.setCid(cid);
		
		return this.quizService.getActiveQuizzesOfCategory(category);
	}
	
}
