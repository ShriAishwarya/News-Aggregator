package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class userDetails {
		@Id
		private int id;
		private String first_name;
		private String last_name ;
		private String gmail;
		private long mobileNo;
		private String password;
		public userDetails(int id, String first_name, String last_name, String gmail, long mobileNo, String password) {
			super();
			this.id = id;
			this.first_name = first_name;
			this.last_name = last_name;
			this.gmail = gmail;
			this.mobileNo = mobileNo;
			this.password = password;
		}
		public userDetails() {
			super();
			// TODO Auto-generated constructor stub
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getFirst_name() {
			return first_name;
		}
		public void setFirst_name(String first_name) {
			this.first_name = first_name;
		}
		public String getLast_name() {
			return last_name;
		}
		public void setLast_name(String last_name) {
			this.last_name = last_name;
		}
		public String getGmail() {
			return gmail;
		}
		public void setGmail(String gmail) {
			this.gmail = gmail;
		}
		public long getMobileNo() {
			return mobileNo;
		}
		public void setMobileNo(long mobileNo) {
			this.mobileNo = mobileNo;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
	}

