package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.Goods;

public interface GoodsMapper {

	//返回所有记录
	public List<Goods> findGoodsList();
	
	//查询多条记录
	public List<Goods> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertGoods(Goods goods);

	//根据ID删除
	public int deleteGoods(int id);
	
	//更新
	public int updateGoods(Goods goods);
	
	//根据ID得到对应的记录
	public Goods queryGoodsById(int id);
	
}

