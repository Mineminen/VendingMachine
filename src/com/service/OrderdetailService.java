package com.service;
import java.util.List;

import com.model.Orderdetail;
import com.util.PageBean;

public interface OrderdetailService{
	
	//查询多条记录
	public List<Orderdetail> queryOrderdetailList(Orderdetail orderdetail,PageBean page) throws Exception;
 
	//添加
	public int insertOrderdetail(Orderdetail orderdetail) throws Exception ;
	
	//根据ID删除
	public int deleteOrderdetail(int id) throws Exception ;
	
	//更新
	public int updateOrderdetail(Orderdetail orderdetail) throws Exception ;
	
	//根据ID查询单条数据
	public Orderdetail queryOrderdetailById(int id) throws Exception ;
	
	//得到记录总数
	int getCount(Orderdetail orderdetail);

}

