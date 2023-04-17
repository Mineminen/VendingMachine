package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Goodstype;
import com.service.GoodstypeService;

import com.util.*;
@Controller
public class GoodstypeAction{
	
	@Autowired
	private GoodstypeService goodstypeService;
	
	//查询所有商品分类
	@RequestMapping(value="/goodstypeList")
	public String goodstypeList(Goodstype ser,HttpServletRequest req)throws Exception{
		
		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);
		
		counts=goodstypeService.getCount(ser);
		List<Goodstype> goodstypeList=goodstypeService.queryGoodstypeList(ser, page);

		req.setAttribute("goodstypeList", goodstypeList);
		
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/goodstype/goodstype_Manage.jsp";
	}
	
	//跳转到添加页面
	@RequestMapping(value="/goodstypeToAdd")
	public String goodstypeToAdd(HttpServletRequest req)throws Exception {
		
		return "/admin/goodstype/goodstype_Add.jsp";
	}
	
	//添加商品分类
	@RequestMapping(value="/goodstypeAdd")
	public String goodstypeAdd(Goodstype goodstype,HttpServletRequest req)throws Exception{
		
		goodstypeService.insertGoodstype(goodstype);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","goodstypeToAdd.action");
		return "common/succeed.jsp";

	}
	
	//删除商品分类
	@RequestMapping(value="/goodstypeDel")
	public String goodstypeDel(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		goodstypeService.deleteGoodstype(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","goodstypeList.action");
		return "common/succeed.jsp";
	}
	
	//跳转到修改页面
	@RequestMapping(value="/togoodstypeEdit")
	public String togoodstypeEdit(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Goodstype goodstype=goodstypeService.queryGoodstypeById(id);
		req.setAttribute("goodstype", goodstype);
		
		return "/admin/goodstype/goodstype_Edit.jsp";
	}
	
	//跳转到详情页面
	@RequestMapping(value="/togoodstypeView")
	public String togoodstypeView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Goodstype goodstype=goodstypeService.queryGoodstypeById(id);
		req.setAttribute("goodstype", goodstype);
		return "/admin/goodstype/goodstype_View.jsp";
	}
	
	//修改商品分类
	@RequestMapping(value="/goodstypeEdit")
	public String goodstypeEdit(Goodstype goodstype,HttpServletRequest req)throws Exception{
			
		goodstypeService.updateGoodstype(goodstype);
		
		req.setAttribute("message","操作成功");
		req.setAttribute("path","goodstypeList.action");
		return "common/succeed.jsp";
	}
			
}

