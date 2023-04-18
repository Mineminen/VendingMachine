package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Shoppingcar;
import com.service.ShoppingcarService;

import com.util.*;
@Controller
public class ShoppingcarAction{

	@Autowired
	private ShoppingcarService shoppingcarService;

	// 查询所有购物车
	@RequestMapping(value="/shoppingcarList")
	public String shoppingcarList(Shoppingcar ser,HttpServletRequest req)throws Exception{

		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
		} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);

		counts=shoppingcarService.getCount(ser);
		List<Shoppingcar> shoppingcarList=shoppingcarService.queryShoppingcarList(ser, page);

		req.setAttribute("shoppingcarList", shoppingcarList);

		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/shoppingcar/shoppingcar_Manage.jsp";
	}

	//跳转到添加页面
	@RequestMapping(value="/shoppingcarToAdd")
	public String shoppingcarToAdd(HttpServletRequest req)throws Exception {

		return "/admin/shoppingcar/shoppingcar_Add.jsp";
	}

	//添加购物车
	@RequestMapping(value="/shoppingcarAdd")
	public void shoppingcarAdd(Shoppingcar shoppingcar,HttpServletRequest req,HttpServletResponse response)throws Exception{
		response.setContentType("text/html;charset=utf-8");
		String flag="0";

		HttpSession session = req.getSession();
		String lname = (String) session.getAttribute("lname");
		//判断用户是否登录
		if (lname == null) {
			flag="0";
		}
		else
		{
			shoppingcar.setLname(lname);
			//判断购物车中是否已有此商品
			Shoppingcar ser = new Shoppingcar();
			ser.setLname(lname);
			ser.setGid(shoppingcar.getGid());
			List<Shoppingcar> shoppingcarList=shoppingcarService.queryShoppingcarList(ser, null);
			if(shoppingcarList.size()>0)
			{
				//更新购物车中此商品的数量
				Shoppingcar shoppingcar2 = shoppingcarList.get(0);
				shoppingcar2.setQuantity(shoppingcar2.getQuantity()+shoppingcar.getQuantity());
				shoppingcarService.updateShoppingcar(shoppingcar2);
			}
			else
			{
				shoppingcarService.insertShoppingcar(shoppingcar);
			}

			//查询购物车中商品的数量
			ser = new Shoppingcar();
			ser.setLname(lname);
			shoppingcarList=shoppingcarService.queryShoppingcarList(ser, null);
			//遍历
			int quantity = 0;
			for (int i = 0; i < shoppingcarList.size(); i++) {
				quantity += shoppingcarList.get(i).getQuantity();
			}
			flag=quantity+"";

		}



		//输出flag

		PrintWriter out = response.getWriter();
		out.print(flag);
		out.flush();
		out.close();
	}

	//删除购物车
	@RequestMapping(value="/shoppingcarDel")
	public String shoppingcarDel(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		shoppingcarService.deleteShoppingcar(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","toCart.action");
		return "common/succeed.jsp";
	}

	//跳转到修改页面
	@RequestMapping(value="/toshoppingcarEdit")
	public String toshoppingcarEdit(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Shoppingcar shoppingcar=shoppingcarService.queryShoppingcarById(id);
		req.setAttribute("shoppingcar", shoppingcar);

		return "/admin/shoppingcar/shoppingcar_Edit.jsp";
	}

	//跳转到详情页面
	@RequestMapping(value="/toshoppingcarView")
	public String toshoppingcarView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Shoppingcar shoppingcar=shoppingcarService.queryShoppingcarById(id);
		req.setAttribute("shoppingcar", shoppingcar);
		return "/admin/shoppingcar/shoppingcar_View.jsp";
	}

	//修改购物车
	@RequestMapping(value="/shoppingcarEdit")
	public String shoppingcarEdit(Shoppingcar shoppingcar,HttpServletRequest req)throws Exception{

		String f=req.getParameter("f");

		Shoppingcar shoppingcar2=shoppingcarService.queryShoppingcarById(shoppingcar.getId());
		if (f.equals("1")) {
			//数量加1
			shoppingcar.setQuantity(shoppingcar2.getQuantity()+1);

		} else {

			//判断数量不能小于2
			if (shoppingcar2.getQuantity()<=1) {

			}
			else
			{
				//数量减1
				shoppingcar.setQuantity(shoppingcar2.getQuantity()-1);
			}

		}
		shoppingcarService.updateShoppingcar(shoppingcar);
		req.setAttribute("message","操作成功");

		req.setAttribute("path","toCart.action");
		return "common/succeed.jsp";
	}

}

