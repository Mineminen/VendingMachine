package com.model;

/**
* (orderdetail)订单商品实体类
*/
public class Orderdetail extends ComData{
	
	private static final long serialVersionUID = 477678117278567L;
	private Integer id;    //ID
	private String no;    //订单编号
	private Integer gid;    //商品ID
	private Object price;    //单价
	private Integer quantity;    //数量

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public Integer getGid() {
		return gid;
	}

	public void setGid(Integer gid) {
		this.gid = gid;
	}

	public Object getPrice() {
		return price;
	}

	public void setPrice(Object price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

}

