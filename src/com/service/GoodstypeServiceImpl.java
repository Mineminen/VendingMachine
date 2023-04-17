package com.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.GoodstypeMapper;
import com.model.Goodstype;
import com.util.PageBean;
@Service
public class GoodstypeServiceImpl implements GoodstypeService{
        
	@Autowired
	private GoodstypeMapper goodstypeMapper;

	//查询多条记录
	public List<Goodstype> queryGoodstypeList(Goodstype goodstype,PageBean page) throws Exception {
		Map<String, Object> map =getQueryMap(goodstype, page);
		
		List<Goodstype> getGoodstype = goodstypeMapper.query(map);
		
		return getGoodstype;
	}
	
	//得到记录总数
	@Override
	public int getCount(Goodstype goodstype) {
		Map<String, Object> map = getQueryMap(goodstype, null);
		int count = goodstypeMapper.getCount(map);
		return count;
	}
	
	private Map<String, Object> getQueryMap(Goodstype goodstype,PageBean page){
		Map<String, Object> map = new HashMap<String, Object>();
		if(goodstype!=null){
			map.put("tyId", goodstype.getTyId());
			map.put("tyname", goodstype.getTyname());
			map.put("sort", goodstype.getSort());
			map.put("condition", goodstype.getCondition());

		}
		PageBean.setPageMap(map, page);
		return map;
	}
		
	//添加
	public int insertGoodstype(Goodstype goodstype) throws Exception {
		return goodstypeMapper.insertGoodstype(goodstype);
	}

	//根据ID删除
	public int deleteGoodstype(int id) throws Exception {
		return goodstypeMapper.deleteGoodstype(id);
	}

	//更新
	public int updateGoodstype(Goodstype goodstype) throws Exception {
		return goodstypeMapper.updateGoodstype(goodstype);
	}
	
	//根据ID得到对应的记录
	public Goodstype queryGoodstypeById(int id) throws Exception {
		Goodstype po =  goodstypeMapper.queryGoodstypeById(id);
		return po;
	}
}

