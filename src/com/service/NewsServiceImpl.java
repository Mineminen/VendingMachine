package com.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.NewsMapper;
import com.model.News;
import com.util.PageBean;
@Service
public class NewsServiceImpl implements NewsService{
        
	@Autowired
	private NewsMapper newsMapper;

	//查询多条记录
	public List<News> queryNewsList(News news,PageBean page) throws Exception {
		Map<String, Object> map =getQueryMap(news, page);
		
		List<News> getNews = newsMapper.query(map);
		
		return getNews;
	}
	
	//得到记录总数
	@Override
	public int getCount(News news) {
		Map<String, Object> map = getQueryMap(news, null);
		int count = newsMapper.getCount(map);
		return count;
	}
	
	private Map<String, Object> getQueryMap(News news,PageBean page){
		Map<String, Object> map = new HashMap<String, Object>();
		if(news!=null){
			map.put("id", news.getId());
			map.put("title", news.getTitle());
			map.put("nmemo", news.getNmemo());
			map.put("naddtime", news.getNaddtime());
			map.put("sort", news.getSort());
			map.put("condition", news.getCondition());

		}
		PageBean.setPageMap(map, page);
		return map;
	}
		
	//添加
	public int insertNews(News news) throws Exception {
		return newsMapper.insertNews(news);
	}

	//根据ID删除
	public int deleteNews(int id) throws Exception {
		return newsMapper.deleteNews(id);
	}

	//更新
	public int updateNews(News news) throws Exception {
		return newsMapper.updateNews(news);
	}
	
	//根据ID得到对应的记录
	public News queryNewsById(int id) throws Exception {
		News po =  newsMapper.queryNewsById(id);
		return po;
	}
}

