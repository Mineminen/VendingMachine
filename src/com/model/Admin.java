package com.model;

/**
* (admin)管理员实体类
*/
public class Admin extends ComData{
	
	private static final long serialVersionUID = 884547634457472L;
	private Integer aid;    //ID
	private String lname;    //用户名
	private String password;    //登录密码
	private String aname;    //姓名
	private String sex;    //性别
	private String tel;    //手机号码
	private String sf;    //身份

	public Integer getAid() {
		return aid;
	}

	public void setAid(Integer aid) {
		this.aid = aid;
	}

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

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getSf() {
		return sf;
	}

	public void setSf(String sf) {
		this.sf = sf;
	}

}

