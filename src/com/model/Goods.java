package com.model;

/**
* (goods)商品实体类
*/
public class Goods extends ComData{
	
	private static final long serialVersionUID = 333218628455514L;
	private Integer gid;    //ID
	private Integer tyid;    //商品分类
	private String tyname;
	private String gtitle;    //商品名称
	private String photo;    //商品图片
	private String address;    //商品产地
	private Object price;    //价格
	private String gmemo;    //商品描述
	private String gflag;    //商品状态

	public Integer getGid() {
		return gid;
	}

	public void setGid(Integer gid) {
		this.gid = gid;
	}

	public Integer getTyid() {
		return tyid;
	}

	public void setTyid(Integer tyid) {
		this.tyid = tyid;
	}

	public String getTyname() {
		return tyname;
	}

	public void setTyname(String tyname) {
		this.tyname = tyname;
	}

	public String getGtitle() {
		return gtitle;
	}

	public void setGtitle(String gtitle) {
		this.gtitle = gtitle;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Object getPrice() {
		return price;
	}

	public void setPrice(Object price) {
		this.price = price;
	}

	public String getGmemo() {
		return gmemo;
	}

	public void setGmemo(String gmemo) {
		this.gmemo = gmemo;
	}

	public String getGflag() {
		return gflag;
	}

	public void setGflag(String gflag) {
		this.gflag = gflag;
	}

}

