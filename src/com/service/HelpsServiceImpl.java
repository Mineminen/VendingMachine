package com.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.HelpsMapper;
import com.model.Helps;
import com.util.PageBean;
@Service
public class HelpsServiceImpl implements HelpsService{
        
	@Autowired
	private HelpsMapper helpsMapper;

	//查询多条记录
	public List<Helps> queryHelpsList(Helps helps,PageBean page) throws Exception {
		Map<String, Object> map =getQueryMap(helps, page);
		
		List<Helps> getHelps = helpsMapper.query(map);
		
		return getHelps;
	}
	
	//得到记录总数
	@Override
	public int getCount(Helps helps) {
		Map<String, Object> map = getQueryMap(helps, null);
		int count = helpsMapper.getCount(map);
		return count;
	}
	
	private Map<String, Object> getQueryMap(Helps helps,PageBean page){
		Map<String, Object> map = new HashMap<String, Object>();
		if(helps!=null){
			map.put("hid", helps.getHid());
			map.put("htitle", helps.getHtitle());
			map.put("hdetail", helps.getHdetail());
			map.put("addtime", helps.getAddtime());
			map.put("sort", helps.getSort());
			map.put("condition", helps.getCondition());

		}
		PageBean.setPageMap(map, page);
		return map;
	}
		
	//添加
	public int insertHelps(Helps helps) throws Exception {
		return helpsMapper.insertHelps(helps);
	}

	//根据ID删除
	public int deleteHelps(int id) throws Exception {
		return helpsMapper.deleteHelps(id);
	}

	//更新
	public int updateHelps(Helps helps) throws Exception {
		return helpsMapper.updateHelps(helps);
	}
	
	//根据ID得到对应的记录
	public Helps queryHelpsById(int id) throws Exception {
		Helps po =  helpsMapper.queryHelpsById(id);
		return po;
	}
}

