package com.exam.exception;

public class UserFountException extends Exception {
	
	public UserFountException() {
		super("User with this Username i already there in DB !! try with another name");
	}
	
	public UserFountException (String msg)  { super(msg);}

}
