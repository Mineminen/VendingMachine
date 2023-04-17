package com.controller;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.model.Admin;
import com.service.AdminService;

import com.util.*;
@Controller
public class AdminAction{
	
	@Autowired
	private AdminService adminService;
	
	//查询所有管理员
	@RequestMapping(value="/adminList")
	public String adminList(Admin ser,HttpServletRequest req)throws Exception{
		
		/** 分页代码   **/
		int offset = 0;  //记录偏移量，hibernate数据分页用到
		int counts = 0;  //总记录数
		try {
			offset = Integer.parseInt(req.getParameter("pager.offset"));
			} catch (Exception e) {
		}
		PageBean page = new PageBean(offset);

		ser.setSf("管理员");
		
		counts=adminService.getCount(ser);
		List<Admin> adminList=adminService.queryAdminList(ser, page);

		req.setAttribute("adminList", adminList);
		
		/** 分页代码  k开始**/
		req.setAttribute("itemSize",counts);
		int page_count = counts % PageBean.PAGE_IETM == 0 ? counts / PageBean.PAGE_IETM : counts / PageBean.PAGE_IETM + 1;
		req.setAttribute("pageItem",PageBean.PAGE_IETM);
		req.setAttribute("pageTotal",page_count);
		/** 分页代码  结束 **/
		return "/admin/admin/admin_Manage.jsp";
	}
	
	//跳转到添加页面
	@RequestMapping(value="/adminToAdd")
	public String adminToAdd(HttpServletRequest req)throws Exception {
		
		return "/admin/admin/admin_Add.jsp";
	}
	
	//添加管理员
	@RequestMapping(value="/adminAdd")
	public String adminAdd(Admin admin,HttpServletRequest req)throws Exception{
		
		Admin ad=new Admin();
		ad.setLname(admin.getLname());

		List<Admin> list = adminService.queryAdminList(ad, null);

		if(list!=null&&list.size()>0){
			req.setAttribute("alert","该用户名已存在，请重新输入");
			}else {
			admin.setSf("管理员");
			adminService.insertAdmin(admin);
			req.setAttribute("message","操作成功");
			req.setAttribute("path","adminToAdd.action");
		}

		return "common/succeed.jsp";

	}
	
	//删除管理员
	@RequestMapping(value="/adminDel")
	public String adminDel(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		adminService.deleteAdmin(id);
		req.setAttribute("message","操作成功");
		req.setAttribute("path","adminList.action");
		return "common/succeed.jsp";
	}
	
	//跳转到修改页面
	@RequestMapping(value="/toadminEdit")
	public String toadminEdit(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Admin admin=adminService.queryAdminById(id);
		req.setAttribute("admin", admin);
		
		return "/admin/admin/admin_Edit.jsp";
	}
	
	//跳转到详情页面
	@RequestMapping(value="/toadminView")
	public String toadminView(HttpServletRequest req)throws Exception{
		int id = Integer.parseInt(req.getParameter("id"));
		Admin admin=adminService.queryAdminById(id);
		req.setAttribute("admin", admin);
		return "/admin/admin/admin_View.jsp";
	}
	
	//修改管理员
	@RequestMapping(value="/adminEdit")
	public String adminEdit(Admin admin,HttpServletRequest req)throws Exception{
			
		adminService.updateAdmin(admin);
		
		req.setAttribute("message","操作成功");
		req.setAttribute("path","adminList.action");
		return "common/succeed.jsp";
	}
			
	//跳转到修改个人信息页面
	@RequestMapping(value="/toadminInfo")
	public String toadminInfo(HttpServletRequest req)throws Exception{
		String id=req.getSession().getAttribute("adminId").toString();
		Admin admin=adminService.queryAdminById(Integer.parseInt(id));
		req.setAttribute("admin", admin);
		
		return "/admin/admin/admin_Info.jsp";
	}
	
	//修改个人信息
	@RequestMapping(value="/adminInfo")
	public String adminInfo(Admin admin,HttpServletRequest req)throws Exception{
    			
		adminService.updateAdmin(admin);
    		
		req.setAttribute("message","操作成功");
		req.setAttribute("path","toadminInfo.action");
		return "common/succeed.jsp";
	}

	//登录
	@RequestMapping(value = "/adminLogin",produces="text/html;charset=UTF-8")
	public String adminLogin(HttpServletRequest req) throws Exception {

		req.setCharacterEncoding("UTF-8");

		Admin admin = new Admin();
		admin.setLname(req.getParameter("txtUserName"));
		admin.setPassword(req.getParameter("txtPassWord"));

		List<Admin> adminList = adminService.queryAdminList(admin, null);
		if (adminList != null && adminList.size() > 0) {
			Admin admin2 = (Admin) adminList.get(0);
			HttpSession session = req.getSession();
			session.setAttribute("adminId", admin2.getAid());
			session.setAttribute("adminLname", admin2.getLname());
			session.setAttribute("role", admin2.getSf());
			req.setAttribute("message", "登录成功");
			req.setAttribute("path", "/admin/index.jsp");
			} else {
			req.setAttribute("alert", "用户名或密码错误");
			req.setAttribute("path", "/login.jsp");
		}

		return "common/succeed.jsp";
	}

	//修改密码
	@RequestMapping(value = "/adminPass")
	public String adminPass(HttpServletRequest req) throws Exception {
		HttpSession session = req.getSession();
		
		String pwd1 = req.getParameter("txt_pwd");
		String pwd2 = req.getParameter("txt_pwd2");
		String pwd3 = req.getParameter("txt_pwd3");

		if (!pwd2.equals(pwd3)) {
			req.setAttribute("alert", "新密码和确认密码不一致，请重新输入");
			} else {

			Integer Aid = (Integer) session.getAttribute("adminId");//用户ID

			Admin admin = new Admin();
			admin.setAid(Aid);
			admin.setPassword(pwd1);

			int temp=adminService.getCount(admin); //查询数据库中是否存在该用户
			if (temp > 0) {
				admin.setPassword(pwd2); //设置新密码

				adminService.updateAdmin(admin); //更新密码

				req.setAttribute("message", "修改成功");
				req.setAttribute("path", "/admin/admin/pass.jsp");

			} else {
				req.setAttribute("alert", "原密码错误，请重新输入");

			}

		}
		return "common/succeed.jsp";
	}

}

