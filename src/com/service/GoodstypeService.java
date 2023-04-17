package com.service;
import java.util.List;

import com.model.Goodstype;
import com.util.PageBean;

public interface GoodstypeService{
	
	//查询多条记录
	public List<Goodstype> queryGoodstypeList(Goodstype goodstype,PageBean page) throws Exception;
 
	//添加
	public int insertGoodstype(Goodstype goodstype) throws Exception ;
	
	//根据ID删除
	public int deleteGoodstype(int id) throws Exception ;
	
	//更新
	public int updateGoodstype(Goodstype goodstype) throws Exception ;
	
	//根据ID查询单条数据
	public Goodstype queryGoodstypeById(int id) throws Exception ;
	
	//得到记录总数
	int getCount(Goodstype goodstype);

}

