package com.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.OrderformMapper;
import com.model.Orderform;
import com.util.PageBean;
@Service
public class OrderformServiceImpl implements OrderformService{
        
	@Autowired
	private OrderformMapper orderformMapper;

	//查询多条记录
	public List<Orderform> queryOrderformList(Orderform orderform,PageBean page) throws Exception {
		Map<String, Object> map =getQueryMap(orderform, page);
		
		List<Orderform> getOrderform = orderformMapper.query(map);
		
		return getOrderform;
	}
	
	//得到记录总数
	@Override
	public int getCount(Orderform orderform) {
		Map<String, Object> map = getQueryMap(orderform, null);
		int count = orderformMapper.getCount(map);
		return count;
	}
	
	private Map<String, Object> getQueryMap(Orderform orderform,PageBean page){
		Map<String, Object> map = new HashMap<String, Object>();
		if(orderform!=null){
			map.put("no", orderform.getNo());
			map.put("lname", orderform.getLname());
			map.put("omoney", orderform.getOmoney());
			map.put("otime", orderform.getOtime());
			map.put("oflag", orderform.getOflag());
			map.put("sort", orderform.getSort());
			map.put("condition", orderform.getCondition());

		}
		PageBean.setPageMap(map, page);
		return map;
	}
		
	//添加
	public int insertOrderform(Orderform orderform) throws Exception {
		return orderformMapper.insertOrderform(orderform);
	}

	//根据ID删除
	public int deleteOrderform(String id) throws Exception {
		return orderformMapper.deleteOrderform(id);
	}

	//更新
	public int updateOrderform(Orderform orderform) throws Exception {
		return orderformMapper.updateOrderform(orderform);
	}
	
	//根据ID得到对应的记录
	public Orderform queryOrderformById(String id) throws Exception {
		Orderform po =  orderformMapper.queryOrderformById(id);
		return po;
	}
}

