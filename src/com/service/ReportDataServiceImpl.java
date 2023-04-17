package com.service;

import com.mapper.ReportDataMapper;

import com.model.ReportData;

import com.util.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReportDataServiceImpl implements ReportDataService{
        
	@Autowired
	private ReportDataMapper reportDataMapper;

	//根据ID得到对应的记录
	public List<ReportData> report(ReportData reportdata) throws Exception {
		List<ReportData> getReport= reportDataMapper.report(reportdata);

		return getReport;
	}

}

