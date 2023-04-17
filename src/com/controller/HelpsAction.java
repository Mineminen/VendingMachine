package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Helps;
import com.service.HelpsService;

import com.util.*;
@Controller
public class HelpsAction{
	
	@Autowired
	private HelpsService helpsService;
	
	//查询所有帮助
	@RequestMapping(value="/helpsList")
	public String helpsList(Helps ser,HttpServletRequest req)throws Exception{
		
		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);
		
		counts=helpsService.getCount(ser);
		List<Helps> helpsList=helpsService.queryHelpsList(ser, page);

		//遍历
		for (Helps helps : helpsList) {
			helps.setHdetail(removeHTML.Html2Text(helps.getHdetail()));
		}

		req.setAttribute("helpsList", helpsList);
		
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/helps/helps_Manage.jsp";
	}
	
	//跳转到添加页面
	@RequestMapping(value="/helpsToAdd")
	public String helpsToAdd(HttpServletRequest req)throws Exception {
		
		return "/admin/helps/helps_Add.jsp";
	}
	
	//添加帮助
	@RequestMapping(value="/helpsAdd")
	public String helpsAdd(Helps helps,HttpServletRequest req)throws Exception{
		
		helpsService.insertHelps(helps);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","helpsToAdd.action");
		return "common/succeed.jsp";

	}
	
	//删除帮助
	@RequestMapping(value="/helpsDel")
	public String helpsDel(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		helpsService.deleteHelps(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","helpsList.action");
		return "common/succeed.jsp";
	}
	
	//跳转到修改页面
	@RequestMapping(value="/tohelpsEdit")
	public String tohelpsEdit(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Helps helps=helpsService.queryHelpsById(id);
		req.setAttribute("helps", helps);
		
		return "/admin/helps/helps_Edit.jsp";
	}
	
	//跳转到详情页面
	@RequestMapping(value="/tohelpsView")
	public String tohelpsView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Helps helps=helpsService.queryHelpsById(id);
		req.setAttribute("helps", helps);
		return "/admin/helps/helps_View.jsp";
	}
	
	//修改帮助
	@RequestMapping(value="/helpsEdit")
	public String helpsEdit(Helps helps,HttpServletRequest req)throws Exception{
			
		helpsService.updateHelps(helps);
		
		req.setAttribute("message","操作成功");
		req.setAttribute("path","helpsList.action");
		return "common/succeed.jsp";
	}
			
}

