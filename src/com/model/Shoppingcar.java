package com.model;

/**
* (shoppingcar)购物车实体类
*/
public class Shoppingcar extends ComData{
	
	private static final long serialVersionUID = 165416138638867L;
	private Integer id;    //ID
	private String lname;    //用户名
	private Integer gid;    //商品ID
	private Integer quantity;    //数量
	private Object price;    //单价

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public Integer getGid() {
		return gid;
	}

	public void setGid(Integer gid) {
		this.gid = gid;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Object getPrice() {
		return price;
	}

	public void setPrice(Object price) {
		this.price = price;
	}

}

