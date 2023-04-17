package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.News;
import com.service.NewsService;

import com.util.*;
@Controller
public class NewsAction{
	
	@Autowired
	private NewsService newsService;
	
	//查询所有公告中心
	@RequestMapping(value="/newsList")
	public String newsList(News ser,HttpServletRequest req)throws Exception{
		
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

		//遍历
		for (News news : newsList) {
			news.setNmemo(removeHTML.Html2Text(news.getNmemo()));
		}

		req.setAttribute("newsList", newsList);
		
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/news/news_Manage.jsp";
	}
	
	//跳转到添加页面
	@RequestMapping(value="/newsToAdd")
	public String newsToAdd(HttpServletRequest req)throws Exception {
		
		return "/admin/news/news_Add.jsp";
	}
	
	//添加公告中心
	@RequestMapping(value="/newsAdd")
	public String newsAdd(News news,HttpServletRequest req)throws Exception{
		
		newsService.insertNews(news);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","newsToAdd.action");
		return "common/succeed.jsp";

	}
	
	//删除公告中心
	@RequestMapping(value="/newsDel")
	public String newsDel(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		newsService.deleteNews(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","newsList.action");
		return "common/succeed.jsp";
	}
	
	//跳转到修改页面
	@RequestMapping(value="/tonewsEdit")
	public String tonewsEdit(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		News news=newsService.queryNewsById(id);
		req.setAttribute("news", news);
		
		return "/admin/news/news_Edit.jsp";
	}
	
	//跳转到详情页面
	@RequestMapping(value="/tonewsView")
	public String tonewsView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		News news=newsService.queryNewsById(id);
		req.setAttribute("news", news);
		return "/admin/news/news_View.jsp";
	}
	
	//修改公告中心
	@RequestMapping(value="/newsEdit")
	public String newsEdit(News news,HttpServletRequest req)throws Exception{
			
		newsService.updateNews(news);
		
		req.setAttribute("message","操作成功");
		req.setAttribute("path","newsList.action");
		return "common/succeed.jsp";
	}
			
}

