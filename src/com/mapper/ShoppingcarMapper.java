package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.Shoppingcar;

public interface ShoppingcarMapper {

	//返回所有记录
	public List<Shoppingcar> findShoppingcarList();
	
	//查询多条记录
	public List<Shoppingcar> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertShoppingcar(Shoppingcar shoppingcar);

	//根据ID删除
	public int deleteShoppingcar(int id);
	
	//更新
	public int updateShoppingcar(Shoppingcar shoppingcar);
	
	//根据ID得到对应的记录
	public Shoppingcar queryShoppingcarById(int id);
	
}

