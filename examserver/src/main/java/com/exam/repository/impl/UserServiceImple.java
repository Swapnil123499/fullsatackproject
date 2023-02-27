package com.exam.repository.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.exception.UserFountException;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repository.RoleRepository;
import com.exam.repository.UserRepository;
import com.exam.service.UserService;
@Service
public class UserServiceImple implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
//creating user
	
	@Override
	public User createUser(User user, Set<UserRole> userRole) throws Exception  {
		
		User local=this.userRepository.findByUsername(user.getUsername());
		if(local!=null)
		{
			
			System.out.println("User is already there !!");
			//throw new Exception("User already present !!");
			throw new UserFountException();
		}
		else {
			
			for(UserRole ur:userRole) {
				
				
				roleRepository.save(ur.getRole()); 
				
				
			}
			
			user.getUserRoles().addAll(userRole);
			
			local=this.userRepository.save(user);
		}
		
		return local;
	}

	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return this.userRepository.findByUsername(username);
	}

	@Override
	public void deleteuserbyid(Long id) {
	
		this.userRepository.deleteById(id);
		
		
	}

	
		
	}


