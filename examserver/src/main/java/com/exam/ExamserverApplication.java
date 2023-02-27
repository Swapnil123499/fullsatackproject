package com.exam;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.exam.exception.UserFountException;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;

@SpringBootApplication
public class ExamserverApplication implements CommandLineRunner {
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		try {
	System.out.println("starting code");
		
	User user = new User();
	
	user.setFirstName("swapnil");
	user.setLastName("jounjalkar");
	user.setEmail("jounjalkarswapnil@gmail.com");
	user.setUsername("swapniljounjalkar");
	user.setPassword(this .bCryptPasswordEncoder.encode("abc"));
	user.setProfile("default.png");
	
    
	
	Role role1= new Role();
	
	role1.setRoleId(44L);
	role1.setRoleName("Admin");
	
	Set<UserRole> userRoleSet = new HashSet<>();
	
	UserRole userRole=new UserRole();
	userRole.setRole(role1);
	userRole.setUser(user);
	
	userRoleSet.add(userRole);
	
//	
	User user1 =this.userService.createUser(user, userRoleSet);
	System.out.println(user1.getUsername());
		}
		catch(UserFountException e) {
			e.printStackTrace();
			
		}
	
	}

}
