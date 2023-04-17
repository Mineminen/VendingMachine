package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.Orderdetail;

public interface OrderdetailMapper {

	//返回所有记录
	public List<Orderdetail> findOrderdetailList();
	
	//查询多条记录
	public List<Orderdetail> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertOrderdetail(Orderdetail orderdetail);

	//根据ID删除
	public int deleteOrderdetail(int id);
	
	//更新
	public int updateOrderdetail(Orderdetail orderdetail);
	
	//根据ID得到对应的记录
	public Orderdetail queryOrderdetailById(int id);
	
}

