package com.service;
import java.util.List;

import com.model.Admin;
import com.util.PageBean;

public interface AdminService{
	
	//查询多条记录
	public List<Admin> queryAdminList(Admin admin,PageBean page) throws Exception;
 
	//添加
	public int insertAdmin(Admin admin) throws Exception ;
	
	//根据ID删除
	public int deleteAdmin(int id) throws Exception ;
	
	//更新
	public int updateAdmin(Admin admin) throws Exception ;
	
	//根据ID查询单条数据
	public Admin queryAdminById(int id) throws Exception ;
	
	//得到记录总数
	int getCount(Admin admin);

}

