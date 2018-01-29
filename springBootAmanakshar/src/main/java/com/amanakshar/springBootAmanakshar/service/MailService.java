package com.amanakshar.springBootAmanakshar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Repository;

import com.amanakshar.springBootAmanakshar.model.EmailModel;



@Repository
public class MailService {
	
	
	
	String emailAdd = "kartikeyrajvaidya@gmail.com";
	@Autowired
	 private JavaMailSender javaMailSender;
	
	
	public void sendMail(EmailModel emailModel ) {
		
		SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(emailAdd);
        mailMessage.setSubject(emailModel.getSubject());
        mailMessage.setText(emailModel.getMessage());
       // mailMessage.setFrom("admin@admin.com");
        javaMailSender.send(mailMessage);		
	}
}
