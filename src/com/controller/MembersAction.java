package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Members;
import com.service.MembersService;

import com.util.*;
@Controller
public class MembersAction{
	
	@Autowired
	private MembersService membersService;
	
	//查询所有用户
	@RequestMapping(value="/membersList")
	public String membersList(Members ser,HttpServletRequest req)throws Exception{
		
		/** 分页代码**/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);
		
		counts=membersService.getCount(ser);
		List<Members> membersList=membersService.queryMembersList(ser, page);

		req.setAttribute("membersList", membersList);
		
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/members/members_Manage.jsp";
	}
	
	//跳转到添加页面
	@RequestMapping(value="/membersToAdd")
	public String membersToAdd(HttpServletRequest req)throws Exception {
		
		return "/admin/members/members_Add.jsp";
	}
	
	//添加用户
	@RequestMapping(value="/membersAdd")
	public String membersAdd(Members members,HttpServletRequest req)throws Exception{
		
		Members me=new Members();
		me.setLname(members.getLname());

		List<Members> list = membersService.queryMembersList(me, null);

		if(list!=null&&list.size()>0){
			req.setAttribute("alert","该账号已存在，请重新输入");
			}else {
			membersService.insertMembers(members);
			req.setAttribute("message","操作成功");
			req.setAttribute("path","membersToAdd.action");
		}

		return "common/succeed.jsp";

	}
	
	//删除用户
	@RequestMapping(value="/membersDel")
	public String membersDel(HttpServletRequest req)throws Exception{
		String id = req.getParameter("id");
		membersService.deleteMembers(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","membersList.action");
		return "common/succeed.jsp";
	}
	
	//跳转到修改页面
	@RequestMapping(value="/tomembersEdit")
	public String tomembersEdit(HttpServletRequest req)throws Exception{
		String id = req.getParameter("id");
		Members members=membersService.queryMembersById(id);
		req.setAttribute("members", members);
		
		return "/admin/members/members_Edit.jsp";
	}
	
	//跳转到详情页面
	@RequestMapping(value="/tomembersView")
	public String tomembersView(HttpServletRequest req)throws Exception{
		String id = req.getParameter("id");
		Members members=membersService.queryMembersById(id);
		req.setAttribute("members", members);
		return "/admin/members/members_View.jsp";
	}
	
	//修改用户
	@RequestMapping(value="/membersEdit")
	public String membersEdit(Members members,HttpServletRequest req)throws Exception{
			
		membersService.updateMembers(members);
		
		req.setAttribute("message","操作成功");
		req.setAttribute("path","membersList.action");
		return "common/succeed.jsp";
	}
			
}

