package com.example.demo.Services;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Models.userDetails;
import com.example.demo.Repository.RevRepo;
@Service
public class RevService {
	@Autowired
	RevRepo repository;
	
	public Optional<userDetails>getuserDetails(int id){
		return repository.findById(id);
	}
	public String updateDetails(userDetails arg) {
		repository.save(arg);
		return "Updated";
	}
	public String deleteDetails(int id) {
		repository.deleteById(id);
		return "Deleted";
	}

}
