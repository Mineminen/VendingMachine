package com.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.GoodsMapper;
import com.model.Goods;
import com.util.PageBean;
@Service
public class GoodsServiceImpl implements GoodsService{
        
	@Autowired
	private GoodsMapper goodsMapper;

	//查询多条记录
	public List<Goods> queryGoodsList(Goods goods,PageBean page) throws Exception {
		Map<String, Object> map =getQueryMap(goods, page);
		
		List<Goods> getGoods = goodsMapper.query(map);
		
		return getGoods;
	}
	
	//得到记录总数
	@Override
	public int getCount(Goods goods) {
		Map<String, Object> map = getQueryMap(goods, null);
		int count = goodsMapper.getCount(map);
		return count;
	}
	
	private Map<String, Object> getQueryMap(Goods goods,PageBean page){
		Map<String, Object> map = new HashMap<String, Object>();
		if(goods!=null){
			map.put("gid", goods.getGid());
			map.put("tyid", goods.getTyid());
			map.put("gtitle", goods.getGtitle());
			map.put("photo", goods.getPhoto());
			map.put("address", goods.getAddress());
			map.put("price", goods.getPrice());
			map.put("gmemo", goods.getGmemo());
			map.put("gflag", goods.getGflag());
			map.put("sort", goods.getSort());
			map.put("condition", goods.getCondition());

		}
		PageBean.setPageMap(map, page);
		return map;
	}
		
	//添加
	public int insertGoods(Goods goods) throws Exception {
		return goodsMapper.insertGoods(goods);
	}

	//根据ID删除
	public int deleteGoods(int id) throws Exception {
		return goodsMapper.deleteGoods(id);
	}

	//更新
	public int updateGoods(Goods goods) throws Exception {
		return goodsMapper.updateGoods(goods);
	}
	
	//根据ID得到对应的记录
	public Goods queryGoodsById(int id) throws Exception {
		Goods po =  goodsMapper.queryGoodsById(id);
		return po;
	}
}

