package com.service;
import java.util.List;

import com.model.News;
import com.util.PageBean;

public interface NewsService{
	
	//查询多条记录
	public List<News> queryNewsList(News news,PageBean page) throws Exception;
 
	//添加
	public int insertNews(News news) throws Exception ;
	
	//根据ID删除
	public int deleteNews(int id) throws Exception ;
	
	//更新
	public int updateNews(News news) throws Exception ;
	
	//根据ID查询单条数据
	public News queryNewsById(int id) throws Exception ;
	
	//得到记录总数
	int getCount(News news);

}

