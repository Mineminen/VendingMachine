package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Orderdetail;
import com.service.OrderdetailService;

import com.util.*;
@Controller
public class OrderdetailAction{
	
	@Autowired
	private OrderdetailService orderdetailService;
	
	//查询所有订单商品
	@RequestMapping(value="/orderdetailList")
	public String orderdetailList(Orderdetail ser,HttpServletRequest req)throws Exception{
		
		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);
		
		counts=orderdetailService.getCount(ser);
		List<Orderdetail> orderdetailList=orderdetailService.queryOrderdetailList(ser, page);

		req.setAttribute("orderdetailList", orderdetailList);
		
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/orderdetail/orderdetail_Manage.jsp";
	}
	
	//跳转到添加页面
	@RequestMapping(value="/orderdetailToAdd")
	public String orderdetailToAdd(HttpServletRequest req)throws Exception {
		
		return "/admin/orderdetail/orderdetail_Add.jsp";
	}
	
	//添加订单商品
	@RequestMapping(value="/orderdetailAdd")
	public String orderdetailAdd(Orderdetail orderdetail,HttpServletRequest req)throws Exception{
		
		orderdetailService.insertOrderdetail(orderdetail);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","orderdetailToAdd.action");
		return "common/succeed.jsp";

	}
	
	//删除订单商品
	@RequestMapping(value="/orderdetailDel")
	public String orderdetailDel(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		orderdetailService.deleteOrderdetail(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","orderdetailList.action");
		return "common/succeed.jsp";
	}
	
	//跳转到修改页面
	@RequestMapping(value="/toorderdetailEdit")
	public String toorderdetailEdit(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Orderdetail orderdetail=orderdetailService.queryOrderdetailById(id);
		req.setAttribute("orderdetail", orderdetail);
		
		return "/admin/orderdetail/orderdetail_Edit.jsp";
	}
	
	//跳转到详情页面
	@RequestMapping(value="/toorderdetailView")
	public String toorderdetailView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Orderdetail orderdetail=orderdetailService.queryOrderdetailById(id);
		req.setAttribute("orderdetail", orderdetail);
		return "/admin/orderdetail/orderdetail_View.jsp";
	}
	
	//修改订单商品
	@RequestMapping(value="/orderdetailEdit")
	public String orderdetailEdit(Orderdetail orderdetail,HttpServletRequest req)throws Exception{
			
		orderdetailService.updateOrderdetail(orderdetail);
		
		req.setAttribute("message","操作成功");
		req.setAttribute("path","orderdetailList.action");
		return "common/succeed.jsp";
	}
			
}

