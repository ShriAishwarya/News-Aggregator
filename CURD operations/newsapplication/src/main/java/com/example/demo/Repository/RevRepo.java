package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.userDetails;


public interface RevRepo extends JpaRepository<userDetails,Integer>{

}
