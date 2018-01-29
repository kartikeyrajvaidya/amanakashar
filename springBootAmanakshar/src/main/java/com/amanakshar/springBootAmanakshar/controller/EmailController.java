package com.amanakshar.springBootAmanakshar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amanakshar.springBootAmanakshar.model.EmailModel;
import com.amanakshar.springBootAmanakshar.service.MailService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmailController {
	
	
	@Autowired
	MailService emailService;
	
	@PostMapping("/mail")
	public ResponseEntity<EmailModel> postMail(@RequestBody EmailModel emailmodel ) {
		
		emailService.sendMail(emailmodel);
		
		return new ResponseEntity<>(emailmodel, HttpStatus.OK);
		
	}
	
	
	
	
	@GetMapping("/response")
	public ResponseEntity<EmailModel> seeResponse() {
		EmailModel emailModel = new EmailModel();
		emailModel.setName("kartikey");
		emailModel.setEmail("kartike@gmail.com");
		emailModel.setMessage(",ahdcvjkhwc");
		emailModel.setSubject("wejfbjkhwecbl");
		
		return new ResponseEntity<>(emailModel, HttpStatus.OK);
		
	}
	
}

