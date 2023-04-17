package com.model;

/**
* (reportData)报表实体类
*/
public class ReportData implements java.io.Serializable{
	
	private static final long serialVersionUID = 382171156362412L;

	private String name;
	private Integer num;
	private String sql;
	private String by1; //备用字段1
	private String by2; //备用字段2
	private String by3; //备用字段3
	private String by4; //备用字段4
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	public String getSql() {
		return sql;
	}

	public void setSql(String sql) {
		this.sql = sql;
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

