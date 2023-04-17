package com.model;

/**
* (members)用户实体类
*/
public class Members extends ComData{
	
	private static final long serialVersionUID = 122526557524176L;
	private String lname;    //账号
	private String password;    //登录密码
	private String mname;    //姓名
	private String phone;    //手机号码
	private String email;    //Email
	private String address;    //联系地址
	private String addtime;    //注册时间

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAddtime() {
		return addtime;
	}

	public void setAddtime(String addtime) {
		this.addtime = addtime;
	}

}

