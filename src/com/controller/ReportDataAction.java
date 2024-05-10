package com.controller;

import com.model.ReportData;
import com.service.ReportDataService;
import com.util.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class ReportDataAction {

	@Autowired
	private ReportDataService reportDataService;

	//商品分类销量统计
	@RequestMapping(value="/queryReport")
	public String queryReport(ReportData reportdata,HttpServletRequest req) throws Exception {

		reportdata.setSql("SELECT goodstype.tyname as name, SUM(orderdetail.quantity) AS num\n" +
				"FROM goodstype\n" +
				"         JOIN goods ON goodstype.tyId = goods.tyid\n" +
				"         JOIN orderdetail ON goods.gid = orderdetail.gid\n" +
				"GROUP BY goodstype.tyname;");
		List<ReportData> getReportData = reportDataService.report(reportdata);

		req.setAttribute("ReportDataList", getReportData);
		return "/admin/total/total.jsp";

	}

	//热销排行榜
	@RequestMapping(value="/queryReport2")
		public String queryReport2(ReportData reportdata,HttpServletRequest req) throws Exception {

		reportdata.setSql("SELECT g.gtitle as name, IFNULL(SUM(od.quantity), 0) AS num\n" +
				"FROM goods g\n" +
				"         LEFT JOIN orderdetail od ON g.gid = od.gid\n" +
				"GROUP BY g.gid\n" +
				"ORDER BY num DESC\n");
		List<ReportData> getReportData = reportDataService.report(reportdata);

		req.setAttribute("ReportDataList", getReportData);
		return "/admin/total/total2.jsp";

	}
}

