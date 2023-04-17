package com.model;

/**
* (helps)帮助实体类
*/
public class Helps extends ComData{
	
	private static final long serialVersionUID = 738874238372667L;
	private Integer hid;    //ID
	private String htitle;    //标题
	private String hdetail;    //内容
	private String addtime;    //发布时间

	public Integer getHid() {
		return hid;
	}

	public void setHid(Integer hid) {
		this.hid = hid;
	}

	public String getHtitle() {
		return htitle;
	}

	public void setHtitle(String htitle) {
		this.htitle = htitle;
	}

	public String getHdetail() {
		return hdetail;
	}

	public void setHdetail(String hdetail) {
		this.hdetail = hdetail;
	}

	public String getAddtime() {
		return addtime;
	}

	public void setAddtime(String addtime) {
		this.addtime = addtime;
	}

}

