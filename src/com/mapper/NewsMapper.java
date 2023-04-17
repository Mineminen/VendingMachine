package com.mapper;

import java.util.List;
import java.util.Map;

import com.model.News;

public interface NewsMapper {

	//返回所有记录
	public List<News> findNewsList();
	
	//查询多条记录
	public List<News> query(Map<String,Object> inputParam);
	
	//得到记录总数
	int getCount(Map<String,Object> inputParam);
	
	//添加
	public int insertNews(News news);

	//根据ID删除
	public int deleteNews(int id);
	
	//更新
	public int updateNews(News news);
	
	//根据ID得到对应的记录
	public News queryNewsById(int id);
	
}

