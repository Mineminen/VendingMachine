package com.model;

/**
* (news)公告中心实体类
*/
public class News extends ComData{
	
	private static final long serialVersionUID = 365217631861521L;
	private Integer id;    //ID
	private String title;    //标题
	private String nmemo;    //内容
	private String naddtime;    //发布时间

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getNmemo() {
		return nmemo;
	}

	public void setNmemo(String nmemo) {
		this.nmemo = nmemo;
	}

	public String getNaddtime() {
		return naddtime;
	}

	public void setNaddtime(String naddtime) {
		this.naddtime = naddtime;
	}

}

