package com.exam.controller;

import java.util.*;

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

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.service.QuestionService;
import com.exam.service.QuizService;


@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuizService quizService;
	
	//add Question
	
	@PostMapping("/")
	public ResponseEntity<Question> add(@RequestBody Question question)
	{
		return ResponseEntity.ok(this.questionService.addQuestion(question));
	}
	
	//update the question 
	@PutMapping("/")
	public ResponseEntity<Question> update(@RequestBody Question question)
	{
		return ResponseEntity.ok(this.questionService.updateQuestion(question));
	}
	
	//get all question of any quiz
	@GetMapping("/quiz/{qid}")
	public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qid") Long qid){
		
//		Quiz quiz =new Quiz();
//		quiz.setQid(qid);
//		
//		Set<Question> questionOfQuiz = this.questionService.getQuestionsofQuiz(quiz);
//		return ResponseEntity.ok(questionOfQuiz);
		
		Quiz quiz=this.quizService.getQuiz(qid);
		
		Set<Question> questions=quiz.getQuestions();
		
		ArrayList<Question> list= new ArrayList<Question>(questions);
		if( list.size()>Integer.parseInt(quiz.getNumberofQuestions()))
		{
			list= (ArrayList<Question>) list.subList(0,Integer.parseInt(quiz.getNumberofQuestions()+1));
		}
		 Collections.shuffle(list);
		 
		return ResponseEntity.ok(list);
		/*ArrayList<String> list= new ArrayList<>();
		list.add("aa");
		list.add("hhh");
		list.add("mmm");
		list.subList(0, 0)
		
		*/
		
	}
	
	
	
	
	@GetMapping("/quiz/all/{qid}")
	public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("qid") Long qid){
		
		Quiz quiz =new Quiz();
		quiz.setQid(qid);
		
		Set<Question> questionOfQuiz = this.questionService.getQuestionsofQuiz(quiz);
		return ResponseEntity.ok(questionOfQuiz);
		
		
		
	}
	
	
	//get single question 
	
	@GetMapping("/{quesId}")
	public Question get(@PathVariable("quesId") Long quesId)
	{
		return this.questionService.getQuestion(quesId);
	}
	
	//delete question
	
	@DeleteMapping("/{quesId}")
	public void delete(@PathVariable("quesId") Long quesId)
	{
		
		this.questionService.deleteQuestion(quesId);
	}
}
