package com.service;
import java.util.List;

import com.model.Members;
import com.util.PageBean;

public interface MembersService{
	
	//查询多条记录
	public List<Members> queryMembersList(Members members,PageBean page) throws Exception;
 
	//添加
	public int insertMembers(Members members) throws Exception ;
	
	//根据ID删除
	public int deleteMembers(String id) throws Exception ;
	
	//更新
	public int updateMembers(Members members) throws Exception ;
	
	//根据ID查询单条数据
	public Members queryMembersById(String id) throws Exception ;
	
	//得到记录总数
	int getCount(Members members);

}

