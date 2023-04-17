package com.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.ShoppingcarMapper;
import com.model.Shoppingcar;
import com.util.PageBean;
@Service
public class ShoppingcarServiceImpl implements ShoppingcarService{
        
	@Autowired
	private ShoppingcarMapper shoppingcarMapper;

	//查询多条记录
	public List<Shoppingcar> queryShoppingcarList(Shoppingcar shoppingcar,PageBean page) throws Exception {
		Map<String, Object> map =getQueryMap(shoppingcar, page);
		
		List<Shoppingcar> getShoppingcar = shoppingcarMapper.query(map);
		
		return getShoppingcar;
	}
	
	//得到记录总数
	@Override
	public int getCount(Shoppingcar shoppingcar) {
		Map<String, Object> map = getQueryMap(shoppingcar, null);
		int count = shoppingcarMapper.getCount(map);
		return count;
	}
	
	private Map<String, Object> getQueryMap(Shoppingcar shoppingcar,PageBean page){
		Map<String, Object> map = new HashMap<String, Object>();
		if(shoppingcar!=null){
			map.put("id", shoppingcar.getId());
			map.put("lname", shoppingcar.getLname());
			map.put("gid", shoppingcar.getGid());
			map.put("quantity", shoppingcar.getQuantity());
			map.put("price", shoppingcar.getPrice());
			map.put("sort", shoppingcar.getSort());
			map.put("condition", shoppingcar.getCondition());

		}
		PageBean.setPageMap(map, page);
		return map;
	}
		
	//添加
	public int insertShoppingcar(Shoppingcar shoppingcar) throws Exception {
		return shoppingcarMapper.insertShoppingcar(shoppingcar);
	}

	//根据ID删除
	public int deleteShoppingcar(int id) throws Exception {
		return shoppingcarMapper.deleteShoppingcar(id);
	}

	//更新
	public int updateShoppingcar(Shoppingcar shoppingcar) throws Exception {
		return shoppingcarMapper.updateShoppingcar(shoppingcar);
	}
	
	//根据ID得到对应的记录
	public Shoppingcar queryShoppingcarById(int id) throws Exception {
		Shoppingcar po =  shoppingcarMapper.queryShoppingcarById(id);
		return po;
	}
}

