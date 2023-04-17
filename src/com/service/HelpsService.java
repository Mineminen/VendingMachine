package com.service;
import java.util.List;

import com.model.Helps;
import com.util.PageBean;

public interface HelpsService{
	
	//查询多条记录
	public List<Helps> queryHelpsList(Helps helps,PageBean page) throws Exception;
 
	//添加
	public int insertHelps(Helps helps) throws Exception ;
	
	//根据ID删除
	public int deleteHelps(int id) throws Exception ;
	
	//更新
	public int updateHelps(Helps helps) throws Exception ;
	
	//根据ID查询单条数据
	public Helps queryHelpsById(int id) throws Exception ;
	
	//得到记录总数
	int getCount(Helps helps);

}

