package com.service;
import java.util.List;

import com.model.Orderform;
import com.util.PageBean;

public interface OrderformService{
	
	//查询多条记录
	public List<Orderform> queryOrderformList(Orderform orderform,PageBean page) throws Exception;
 
	//添加
	public int insertOrderform(Orderform orderform) throws Exception ;
	
	//根据ID删除
	public int deleteOrderform(String id) throws Exception ;
	
	//更新
	public int updateOrderform(Orderform orderform) throws Exception ;
	
	//根据ID查询单条数据
	public Orderform queryOrderformById(String id) throws Exception ;
	
	//得到记录总数
	int getCount(Orderform orderform);

}

