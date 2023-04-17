package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.Admin;

public interface AdminMapper {

	//返回所有记录
	public List<Admin> findAdminList();
	
	//查询多条记录
	public List<Admin> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertAdmin(Admin admin);

	//根据ID删除
	public int deleteAdmin(int id);
	
	//更新
	public int updateAdmin(Admin admin);
	
	//根据ID得到对应的记录
	public Admin queryAdminById(int id);
	
}

