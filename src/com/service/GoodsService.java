package com.service;
import java.util.List;

import com.model.Goods;
import com.util.PageBean;

public interface GoodsService{
	
	//查询多条记录
	public List<Goods> queryGoodsList(Goods goods,PageBean page) throws Exception;
 
	//添加
	public int insertGoods(Goods goods) throws Exception ;
	
	//根据ID删除
	public int deleteGoods(int id) throws Exception ;
	
	//更新
	public int updateGoods(Goods goods) throws Exception ;
	
	//根据ID查询单条数据
	public Goods queryGoodsById(int id) throws Exception ;
	
	//得到记录总数
	int getCount(Goods goods);

}

