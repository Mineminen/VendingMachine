package com.controller;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.*;
import com.service.GoodstypeService;
import com.service.OrderdetailService;
import com.service.ShoppingcarService;
import com.service.GoodsService;
import com.service.OrderformService;
import com.service.MembersService;
import com.service.NewsService;
import com.service.HelpsService;

import com.util.*;
@Controller
public class IndexAction {
	
	@Autowired
	private GoodstypeService goodstypeService;

	@Autowired
	private OrderdetailService orderdetailService;

	@Autowired
	private ShoppingcarService shoppingcarService;

	@Autowired
	private GoodsService goodsService;

	@Autowired
	private OrderformService orderformService;

	@Autowired
	private MembersService membersService;

	@Autowired
	private NewsService newsService;

	@Autowired
	private HelpsService helpsService;

	//前台首页
	@RequestMapping(value = "/index")
	public String index(HttpServletRequest req) throws Exception {

		List<News> newsList = newsService.queryNewsList(null, new PageBean(0, 10));
		req.setAttribute("newsList", newsList);

		Goods goods = new Goods();
		goods.setGflag("上架");
		List<Goods> goodsList = goodsService.queryGoodsList(goods, new PageBean(0, 8));
		req.setAttribute("goodsList", goodsList);

		goods.setSort("by1 desc,");
		List<Goods> goodsList2 = goodsService.queryGoodsList(goods, new PageBean(0, 8));
		req.setAttribute("goodsList3", goodsList2);

		getLeft(req);
		return "/qiantai/default.jsp";
	}


	//用户注册
	@RequestMapping(value = "/toreg")
	public String toreg(HttpServletRequest req) throws Exception {
		getLeft(req);
		return "/qiantai/reg.jsp";
	}

	//用户注册
	@RequestMapping(value = "/membersRegister")
	public String membersRegister(Members members, HttpServletRequest request) throws Exception {

		Members me = new Members();
		me.setLname(members.getLname());
		String pass2 = request.getParameter("password2");
		List<Members> list = membersService.queryMembersList(me, null);

		if (list != null && list.size() > 0) {
			request.setAttribute("alert", "该用户名已存在，请重新输入");
			} else {

			if (pass2.equals(members.getPassword())) {
				membersService.insertMembers(members);
				request.setAttribute("message", "注册成功，请登录");
				request.setAttribute("path", "tologin.action");
				} else {
				request.setAttribute("alert", "两次密码输入不一致，请重新输入");
			}

		}
		return "common/succeed.jsp";
	}

	//用户登录
	@RequestMapping(value = "/tologin")
	public String tologin(HttpServletRequest req) throws Exception {
		getLeft(req);
		return "/qiantai/login.jsp";
	}

	//用户登录
	@RequestMapping(value = "/membersLogin")
	public String membersLogin(Members members, HttpServletRequest req) throws Exception {

		List<Members> membersList = membersService.queryMembersList(members, null);
		if (membersList != null && membersList.size() > 0) {
			Members members2 = (Members) membersList.get(0);
			HttpSession session = req.getSession();

			session.setAttribute("lname", members2.getLname());
			req.setAttribute("message", "登录成功");
			req.setAttribute("path", "tomember.action");
			} else {
			req.setAttribute("alert", "用户名或密码错误");
			req.setAttribute("path", "tologin.action");
		}

		return "common/succeed.jsp";
	}

	//跳转到后台首页
	@RequestMapping(value = "/tomember")
	public String tomember(HttpServletRequest req) throws Exception {
    
		HttpSession session = req.getSession();
		String lname = (String) session.getAttribute("lname");
		Members members=membersService.queryMembersById(lname);
		req.setAttribute("members", members);
                
		getLeft(req);
		return "/qiantai/member.jsp";
	}

	//跳转到用户修改页面
	@RequestMapping(value="/tomembers_Edit")
	public String tomembers_Edit(HttpServletRequest req)throws Exception{
		HttpSession session = req.getSession();
		String lname = (String) session.getAttribute("lname");
		Members members=membersService.queryMembersById(lname);
		req.setAttribute("members", members);
            		
		getLeft(req);
		return "/qiantai/info.jsp";
	}
            	
	//修改用户
	@RequestMapping(value="/members_Edit")
	public String members_Edit(Members members,HttpServletRequest req)throws Exception{
                        
		membersService.updateMembers(members);
                    
		req.setAttribute("message","操作成功");
		req.setAttribute("path","tomembers_Edit.action");
		return "common/succeed.jsp";
	}

	//跳转到用户修改密码页面
	@RequestMapping(value="/tomembers_Password")
	public String tomembers_Password(HttpServletRequest req)throws Exception{
            	    
		getLeft(req);
		return "/qiantai/password.jsp";
	}
            	
	//修改用户密码
	@RequestMapping(value="/members_Password")
	public String members_Password(HttpServletRequest req) throws Exception {
                  
		HttpSession session = req.getSession();
                    
		String pwd1 = req.getParameter("txt_pwd");
		String pwd2 = req.getParameter("txt_pwd2");
		String pwd3 = req.getParameter("txt_pwd3");
                    
		if (!pwd2.equals(pwd3)) {
			req.setAttribute("alert", "新密码和确认密码不一致，请重新输入");
			} else {
			String lname = (String) session.getAttribute("lname");//用户ID
			Members members = new Members();
			members.setLname(lname);
			members.setPassword(pwd1);
                    
			List<Members> membersList = membersService.queryMembersList(members, null);
			if (membersList != null && membersList.size() > 0) {
                    
				members.setPassword(pwd2);
                    
				membersService.updateMembers(members);
                    
				req.setAttribute("message", "修改成功");
				req.setAttribute("path", "tomembers_Password.action");
                    
				} else {
				req.setAttribute("alert", "原密码错误，请重新输入");
			}
		}
                    
		return "common/succeed.jsp";
	}

	//商品
	@RequestMapping(value="/goods_List")
	public String goods_List(Goods ser,HttpServletRequest req)throws Exception{
    		
		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);

		ser.setGflag("上架");
    		
		counts=goodsService.getCount(ser);
		List<Goods> goodsList=goodsService.queryGoodsList(ser, page);
    
		req.setAttribute("goodsList", goodsList);
    
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		getLeft(req);
		return "/qiantai/goods.jsp";
	}

	//商品详情
	@RequestMapping(value="/goodsView")
	public String goodsView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Goods goods=goodsService.queryGoodsById(id);
		req.setAttribute("goods", goods);
		getLeft(req);
		return "/qiantai/goodsView.jsp";
	}

	//查询所有订单
	@RequestMapping(value="/orderform_Manage")
	public String orderform_Manage(Orderform ser,HttpServletRequest req)throws Exception{
		
		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);
		
		//得到当前登录用户
		String lname=(String) req.getSession().getAttribute("lname");
		ser.setLname(lname);
        		
		counts=orderformService.getCount(ser);
		List<Orderform> orderformList=orderformService.queryOrderformList(ser, page);

		req.setAttribute("orderformList", orderformList);
		
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		
		getLeft(req);
		return "/qiantai/orderformManage.jsp";
	}
	
	//删除订单
	@RequestMapping(value="/orderform_Delete")
	public String orderform_Delete(HttpServletRequest req)throws Exception{
		String id = req.getParameter("id");
		orderformService.deleteOrderform(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","orderform_Manage.action");
		return "common/succeed.jsp";
	}

	//跳转到订单详情页面
	@RequestMapping(value = "/orderform_Show")
	public String orderform_Show(HttpServletRequest req) throws Exception {
		String id = req.getParameter("id");
		Orderform orderform = orderformService.queryOrderformById(id);
		req.setAttribute("orderform", orderform);

		Orderdetail orderdetail = new Orderdetail();
		orderdetail.setNo(id);
		List<Orderdetail> orderdetailList = orderdetailService.queryOrderdetailList(orderdetail, null);
		req.setAttribute("orderdetailList", orderdetailList);

		getLeft(req);

		return "/qiantai/orderformShow.jsp";
	}

	//公告列表
	@RequestMapping(value="/news_List")
	public String news_List(News ser,HttpServletRequest req)throws Exception{
    		
		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);
    		
		counts=newsService.getCount(ser);
		List<News> newsList=newsService.queryNewsList(ser, page);
    
		req.setAttribute("newsList", newsList);
    
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		getLeft(req);
		return "/qiantai/news.jsp";
	}

	//公告详情
	@RequestMapping(value="/newsView")
	public String newsView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		News news=newsService.queryNewsById(id);
		req.setAttribute("news", news);
		getLeft(req);
		return "/qiantai/newsView.jsp";
	}

	//帮助列表
	@RequestMapping(value="/helps_List")
	public String helps_List(Helps ser,HttpServletRequest req)throws Exception{
    		
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
    
		req.setAttribute("helpsList", helpsList);
    
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		getLeft(req);
		return "/qiantai/helpsList.jsp";
	}

	//帮助详情
	@RequestMapping(value="/helpsView")
	public String helpsView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Helps helps=helpsService.queryHelpsById(id);
		req.setAttribute("helps", helps);
		getLeft(req);
		return "/qiantai/helpsView.jsp";
	}

	protected void getLeft(HttpServletRequest req) throws Exception {
		List<Goodstype> goodstypeList = goodstypeService.queryGoodstypeList(null, new PageBean(0, 6));
		req.setAttribute("goodstypeList2", goodstypeList);

		Goods goods = new Goods();
		goods.setGflag("上架");
		List<Goods> goodsList = goodsService.queryGoodsList(goods, new PageBean(0, 10));
		req.setAttribute("goodsList2", goodsList);

		//得到购物车中商品数量
		HttpSession session = req.getSession();
		String lname = (String) session.getAttribute("lname");
		//判断用户是否登录
		if (lname == null) {
			req.setAttribute("total2", 0);
		} else {
			//得到购物车中商品数量
			Shoppingcar ser = new Shoppingcar();
			ser.setLname(lname);
			List<Shoppingcar> shoppingcarList = shoppingcarService.queryShoppingcarList(ser, null);
			int total = 0;
			for (Shoppingcar shoppingcar : shoppingcarList) {
				total += shoppingcar.getQuantity();
			}
			req.setAttribute("total2", total);
		}

	}

	//管理员登录
	@RequestMapping(value = "/toAdminLogin")
	public String toAdminLogin(HttpServletRequest req) throws Exception {
		return "/login.jsp";
	}

	//跳转到购物车页面
	@RequestMapping(value = "/toCart")
	public String toCart(HttpServletRequest req) throws Exception {


		HttpSession session = req.getSession();
		String lname = (String) session.getAttribute("lname");
		//判断用户是否登录
		if (lname == null) {
			req.setAttribute("alert", "请登录！");
			return "common/succeed.jsp";
		} else {
			//返回购物车中的商品
			Shoppingcar ser = new Shoppingcar();
			ser.setLname(lname);
			List<Shoppingcar> shoppingcarList = shoppingcarService.queryShoppingcarList(ser, null);
			req.setAttribute("shoppingcarList", shoppingcarList);

			//返回购物车中的商品总价
			double total = 0;
			for (Shoppingcar shoppingcar : shoppingcarList) {
				total += shoppingcar.getQuantity() * Double.parseDouble(shoppingcar.getPrice().toString());
			}
			req.setAttribute("total", total);


			getLeft(req);
			return "/qiantai/cart.jsp";
		}


	}

	//提交订单页面
	@RequestMapping(value = "/toOrder")
	public String toOrder(HttpServletRequest req) throws Exception {
		HttpSession session = req.getSession();
		String lname = (String) session.getAttribute("lname");
		//判断用户是否登录
		if (lname == null) {
			req.setAttribute("alert", "请登录！");

			return "common/succeed.jsp";
		} else {

			Double omoney=Double.parseDouble(req.getParameter("omoney"));

			Orderform orderform = new Orderform();

			SimpleDateFormat df = new SimpleDateFormat("yyMMddHHmmssSSS");
			String no = df.format(new Date()).toString();
			orderform.setNo(no);
			orderform.setLname(lname);
			orderform.setOflag("已支付");
			orderform.setOmoney(omoney);


			orderformService.insertOrderform(orderform);

			Shoppingcar shoppingcar = new Shoppingcar();
			shoppingcar.setLname(lname);
			List<Shoppingcar> shoppingcarList = shoppingcarService.queryShoppingcarList(shoppingcar,null);
			for (Shoppingcar shoppingcar1 : shoppingcarList) {

				Orderdetail orderdetail = new Orderdetail();
				orderdetail.setNo(no);
				orderdetail.setGid(shoppingcar1.getGid());
				orderdetail.setPrice(shoppingcar1.getPrice());
				orderdetail.setQuantity(shoppingcar1.getQuantity());

				orderdetailService.insertOrderdetail(orderdetail);

				shoppingcarService.deleteShoppingcar(shoppingcar1.getId());
			}

			req.setAttribute("message","出货成功！");
			req.setAttribute("path","orderform_Manage.action");
		}
		return "common/succeed.jsp";
	}


}

