package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Goods;
import com.service.GoodsService;
import com.model.Goodstype;
import com.service.GoodstypeService;

import com.util.*;
@Controller
public class GoodsAction{
	
	@Autowired
	private GoodsService goodsService;
	
	@Autowired
	private GoodstypeService goodstypeService;

	//查询所有商品
	@RequestMapping(value="/goodsList")
	public String goodsList(Goods ser,HttpServletRequest req)throws Exception{
		
		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);
		
		counts=goodsService.getCount(ser);
		List<Goods> goodsList=goodsService.queryGoodsList(ser, page);

		req.setAttribute("goodsList", goodsList);
		
		req.setAttribute("goodstypeList", goodstypeService.queryGoodstypeList(null,null));

		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/goods/goods_Manage.jsp";
	}
	
	//跳转到添加页面
	@RequestMapping(value="/goodsToAdd")
	public String goodsToAdd(HttpServletRequest req)throws Exception {
		
		req.setAttribute("goodstypeList", goodstypeService.queryGoodstypeList(null,null));

		return "/admin/goods/goods_Add.jsp";
	}
	
	//添加商品
	@RequestMapping(value="/goodsAdd")
	public String goodsAdd(Goods goods,HttpServletRequest req)throws Exception{
		
		goodsService.insertGoods(goods);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","goodsToAdd.action");
		return "common/succeed.jsp";

	}
	
	//删除商品
	@RequestMapping(value="/goodsDel")
	public String goodsDel(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		goodsService.deleteGoods(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","goodsList.action");
		return "common/succeed.jsp";
	}
	
	//跳转到修改页面
	@RequestMapping(value="/togoodsEdit")
	public String togoodsEdit(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Goods goods=goodsService.queryGoodsById(id);
		req.setAttribute("goods", goods);
		
		req.setAttribute("goodstypeList", goodstypeService.queryGoodstypeList(null,null));

		return "/admin/goods/goods_Edit.jsp";
	}
	
	//跳转到详情页面
	@RequestMapping(value="/togoodsView")
	public String togoodsView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Goods goods=goodsService.queryGoodsById(id);
		req.setAttribute("goods", goods);
		return "/admin/goods/goods_View.jsp";
	}
	
	//修改商品
	@RequestMapping(value="/goodsEdit")
	public String goodsEdit(Goods goods,HttpServletRequest req)throws Exception{
			
		goodsService.updateGoods(goods);
		
		req.setAttribute("message","操作成功");
		req.setAttribute("path","goodsList.action");
		return "common/succeed.jsp";
	}
			
}

