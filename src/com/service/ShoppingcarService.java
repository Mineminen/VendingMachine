package com.service;
import java.util.List;

import com.model.Shoppingcar;
import com.util.PageBean;

public interface ShoppingcarService{
	
	//查询多条记录
	public List<Shoppingcar> queryShoppingcarList(Shoppingcar shoppingcar,PageBean page) throws Exception;
 
	//添加
	public int insertShoppingcar(Shoppingcar shoppingcar) throws Exception ;
	
	//根据ID删除
	public int deleteShoppingcar(int id) throws Exception ;
	
	//更新
	public int updateShoppingcar(Shoppingcar shoppingcar) throws Exception ;
	
	//根据ID查询单条数据
	public Shoppingcar queryShoppingcarById(int id) throws Exception ;
	
	//得到记录总数
	int getCount(Shoppingcar shoppingcar);

}

