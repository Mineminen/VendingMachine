package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.Members;

public interface MembersMapper {

	//返回所有记录
	public List<Members> findMembersList();
	
	//查询多条记录
	public List<Members> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertMembers(Members members);

	//根据ID删除
	public int deleteMembers(String id);
	
	//更新
	public int updateMembers(Members members);
	
	//根据ID得到对应的记录
	public Members queryMembersById(String id);
	
}

