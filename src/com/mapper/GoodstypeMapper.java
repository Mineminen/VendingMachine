package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.Goodstype;

public interface GoodstypeMapper {

	//返回所有记录
	public List<Goodstype> findGoodstypeList();
	
	//查询多条记录
	public List<Goodstype> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertGoodstype(Goodstype goodstype);

	//根据ID删除
	public int deleteGoodstype(int id);
	
	//更新
	public int updateGoodstype(Goodstype goodstype);
	
	//根据ID得到对应的记录
	public Goodstype queryGoodstypeById(int id);
	
}

