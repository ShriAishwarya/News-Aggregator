package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Models.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin,Long> {
	

}
