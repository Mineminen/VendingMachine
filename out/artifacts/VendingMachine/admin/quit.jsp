<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%
//退出登录
HttpSession session2 = request.getSession();
session2.invalidate();

//跳转到登录页面
response.sendRedirect(basePath+"login.jsp");

%>

