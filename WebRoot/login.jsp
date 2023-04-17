<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
 
    <meta charset="utf-8">
    <title>大学校园自动售货机管理系统</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<%=path %>/admin/css/style.css" type="text/css" media="all">
     
 </head>
 
  <body>


        
     

<h1>大学校园自动售货机管理系统</h1>
<div class="containerw3layouts-agileits">
    <div class="w3imageaits" style="height:373px;"><img src="<%=path%>/admin/img/web.jpeg" style="height:373px;"></div>
    <div class="aitsloginwthree w3layouts agileits"  style="height:373px;">
        <h2>登录进入系统</h2>
           <form action="<%=path%>/adminLogin.action"  method="post" >
            <input type="text" name="txtUserName" placeholder="用户名" required="">
            <input
                type="password" name="txtPassWord" placeholder="密码" required="">
            
            <div class="send-button wthree agileits"><input type="submit" value="登 录"></div>
	 <p class="mb-0 text-muted"> </p>

        </form>
    </div>
    <div class="clear"></div>
</div>
<div class="w3lsfooteragileits">
    <p>©  大学校园自动售货机管理系统. All Rights Reserved
    </p>
</div>




  </body>
</html>


