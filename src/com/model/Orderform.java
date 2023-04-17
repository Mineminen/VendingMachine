package com.model;

/**
* (orderform)订单实体类
*/
public class Orderform extends ComData{
	
	private static final long serialVersionUID = 282411714666826L;
	private String no;    //订单编号
	private String lname;    //账号
	private Object omoney;    //订单金额
	private String otime;    //提交时间
	private String oflag;    //订单状态

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public Object getOmoney() {
		return omoney;
	}

	public void setOmoney(Object omoney) {
		this.omoney = omoney;
	}

	public String getOtime() {
		return otime;
	}

	public void setOtime(String otime) {
		this.otime = otime;
	}

	public String getOflag() {
		return oflag;
	}

	public void setOflag(String oflag) {
		this.oflag = oflag;
	}

}

