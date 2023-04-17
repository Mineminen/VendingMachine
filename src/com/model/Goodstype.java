package com.model;

/**
* (goodstype)商品分类实体类
*/
public class Goodstype extends ComData{
	
	private static final long serialVersionUID = 156881157357617L;
	private Integer tyId;    //分类ID
	private String tyname;    //分类名称

	public Integer getTyId() {
		return tyId;
	}

	public void setTyId(Integer tyId) {
		this.tyId = tyId;
	}

	public String getTyname() {
		return tyname;
	}

	public void setTyname(String tyname) {
		this.tyname = tyname;
	}

}

