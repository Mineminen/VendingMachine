package com.model;

/**
* (ComData)json实体类
*/
public class ComData implements java.io.Serializable{
	
	private static final long serialVersionUID = 5918707187629337548L;

	private String sort;
	private String condition;
	private Object data;
	private String cppic;
	private String userpic;
	private String by1; //备用字段1
	private String by2; //备用字段2
	private String by3; //备用字段3
	private String by4; //备用字段4

	public String getSort() {
		return sort;
	}

	public void setSort(String sort) {
		this.sort = sort;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getCppic() {
		return cppic;
	}

	public void setCppic(String cppic) {
		this.cppic = cppic;
	}

	public String getUserpic() {
		return userpic;
	}

	public String getBy1() {
		return by1;
	}

	public void setBy1(String by1) {
		this.by1 = by1;
	}

	public String getBy2() {
		return by2;
	}

	public void setBy2(String by2) {
		this.by2 = by2;
	}

	public String getBy3() {
		return by3;
	}

	public void setBy3(String by3) {
		this.by3 = by3;
	}

	public String getBy4() {
		return by4;
	}

	public void setBy4(String by4) {
		this.by4 = by4;
	}
}

