package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.Helps;

public interface HelpsMapper {

	//返回所有记录
	public List<Helps> findHelpsList();
	
	//查询多条记录
	public List<Helps> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertHelps(Helps helps);

	//根据ID删除
	public int deleteHelps(int id);
	
	//更新
	public int updateHelps(Helps helps);
	
	//根据ID得到对应的记录
	public Helps queryHelpsById(int id);
	
}

