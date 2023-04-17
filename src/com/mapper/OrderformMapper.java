package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.Orderform;

public interface OrderformMapper {

	//返回所有记录
	public List<Orderform> findOrderformList();
	
	//查询多条记录
	public List<Orderform> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertOrderform(Orderform orderform);

	//根据ID删除
	public int deleteOrderform(String id);
	
	//更新
	public int updateOrderform(Orderform orderform);
	
	//根据ID得到对应的记录
	public Orderform queryOrderformById(String id);
	
}

