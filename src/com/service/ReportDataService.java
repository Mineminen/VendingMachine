package com.service;

import com.model.ReportData;

import java.util.List;

public interface ReportDataService {
	
	//查询多条记录
	public List<ReportData> report(ReportData reportdata) throws Exception;

}

