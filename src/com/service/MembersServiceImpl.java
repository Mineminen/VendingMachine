package com.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.MembersMapper;
import com.model.Members;
import com.util.PageBean;
@Service
public class MembersServiceImpl implements MembersService{
        
	@Autowired
	private MembersMapper membersMapper;

	//查询多条记录
	public List<Members> queryMembersList(Members members,PageBean page) throws Exception {
		Map<String, Object> map =getQueryMap(members, page);
		
		List<Members> getMembers = membersMapper.query(map);
		
		return getMembers;
	}
	
	//得到记录总数
	@Override
	public int getCount(Members members) {
		Map<String, Object> map = getQueryMap(members, null);
		int count = membersMapper.getCount(map);
		return count;
	}
	
	private Map<String, Object> getQueryMap(Members members,PageBean page){
		Map<String, Object> map = new HashMap<String, Object>();
		if(members!=null){
			map.put("lname", members.getLname());
			map.put("password", members.getPassword());
			map.put("mname", members.getMname());
			map.put("phone", members.getPhone());
			map.put("email", members.getEmail());
			map.put("address", members.getAddress());
			map.put("addtime", members.getAddtime());
			map.put("sort", members.getSort());
			map.put("condition", members.getCondition());

		}
		PageBean.setPageMap(map, page);
		return map;
	}
		
	//添加
	public int insertMembers(Members members) throws Exception {
		return membersMapper.insertMembers(members);
	}

	//根据ID删除
	public int deleteMembers(String id) throws Exception {
		return membersMapper.deleteMembers(id);
	}

	//更新
	public int updateMembers(Members members) throws Exception {
		return membersMapper.updateMembers(members);
	}
	
	//根据ID得到对应的记录
	public Members queryMembersById(String id) throws Exception {
		Members po =  membersMapper.queryMembersById(id);
		return po;
	}
}

