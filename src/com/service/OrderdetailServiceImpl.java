package com.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.OrderdetailMapper;
import com.model.Orderdetail;
import com.util.PageBean;
@Service
public class OrderdetailServiceImpl implements OrderdetailService{
        
	@Autowired
	private OrderdetailMapper orderdetailMapper;

	//查询多条记录
	public List<Orderdetail> queryOrderdetailList(Orderdetail orderdetail,PageBean page) throws Exception {
		Map<String, Object> map =getQueryMap(orderdetail, page);
		
		List<Orderdetail> getOrderdetail = orderdetailMapper.query(map);
		
		return getOrderdetail;
	}
	
	//得到记录总数
	@Override
	public int getCount(Orderdetail orderdetail) {
		Map<String, Object> map = getQueryMap(orderdetail, null);
		int count = orderdetailMapper.getCount(map);
		return count;
	}
	
	private Map<String, Object> getQueryMap(Orderdetail orderdetail,PageBean page){
		Map<String, Object> map = new HashMap<String, Object>();
		if(orderdetail!=null){
			map.put("id", orderdetail.getId());
			map.put("no", orderdetail.getNo());
			map.put("gid", orderdetail.getGid());
			map.put("price", orderdetail.getPrice());
			map.put("quantity", orderdetail.getQuantity());
			map.put("sort", orderdetail.getSort());
			map.put("condition", orderdetail.getCondition());

		}
		PageBean.setPageMap(map, page);
		return map;
	}
		
	//添加
	public int insertOrderdetail(Orderdetail orderdetail) throws Exception {
		return orderdetailMapper.insertOrderdetail(orderdetail);
	}

	//根据ID删除
	public int deleteOrderdetail(int id) throws Exception {
		return orderdetailMapper.deleteOrderdetail(id);
	}

	//更新
	public int updateOrderdetail(Orderdetail orderdetail) throws Exception {
		return orderdetailMapper.updateOrderdetail(orderdetail);
	}
	
	//根据ID得到对应的记录
	public Orderdetail queryOrderdetailById(int id) throws Exception {
		Orderdetail po =  orderdetailMapper.queryOrderdetailById(id);
		return po;
	}
}

