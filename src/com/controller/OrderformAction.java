package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.model.Orderdetail;
import com.service.OrderdetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Orderform;
import com.service.OrderformService;

import com.util.*;
@Controller
public class OrderformAction{

	@Autowired
	private OrderformService orderformService;

	@Autowired
	private OrderdetailService orderdetailService;

	//查询所有订单
	@RequestMapping(value="/orderformList")
	public String orderformList(Orderform ser,HttpServletRequest req)throws Exception{

		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
		} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);

		counts=orderformService.getCount(ser);
		List<Orderform> orderformList=orderformService.queryOrderformList(ser, page);

		req.setAttribute("orderformList", orderformList);

		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/orderform/orderform_Manage.jsp";
	}


	//删除订单
	@RequestMapping(value="/orderformDel")
	public String orderformDel(HttpServletRequest req)throws Exception{
		String id = req.getParameter("id");
		orderformService.deleteOrderform(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","orderformList.action");
		return "common/succeed.jsp";
	}

	//跳转到修改页面
	@RequestMapping(value="/toorderformEdit")
	public String toorderformEdit(HttpServletRequest req)throws Exception{
		String id = req.getParameter("id");
		Orderform orderform=orderformService.queryOrderformById(id);
		req.setAttribute("orderform", orderform);

		return "/admin/orderform/orderform_Edit.jsp";
	}

	//跳转到详情页面
	@RequestMapping(value="/toorderformView")
	public String toorderformView(HttpServletRequest req)throws Exception{
		String id = req.getParameter("id");
		Orderform orderform=orderformService.queryOrderformById(id);
		req.setAttribute("orderform", orderform);

		Orderdetail orderdetail=new Orderdetail();
		orderdetail.setNo(id);

		List<Orderdetail> orderdetailList=orderdetailService.queryOrderdetailList(orderdetail,null);
		req.setAttribute("orderdetailList", orderdetailList);

		return "/admin/orderform/orderform_View.jsp";
	}

	//修改订单
	@RequestMapping(value="/orderformEdit")
	public String orderformEdit(Orderform orderform,HttpServletRequest req)throws Exception{

		orderformService.updateOrderform(orderform);

		req.setAttribute("message","操作成功");
		req.setAttribute("path","orderformList.action");
		return "common/succeed.jsp";
	}

}

